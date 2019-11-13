// @flow strict

import { makeCustom, addListeners } from '../../event.js'
import { Config } from '../config/config.js'

const template = document.createElement('template')

template.innerHTML = `
	<link rel="stylesheet" href="js/src/components/main/main.css">
	<header>
		<div>Parasite</div>
		<div>----</div>
		<div>
			<a href="">En</a> | <a href="">Fr</a>
		</div>
	</header>
	<main>
		<parasite-config></parasite-config>
	</main>
	<footer>
		Parasite - Game created by CelShadows - Software written by Stéphane Legrand
	</footer>
`

class Main extends HTMLElement {

	/*:: _shadowRoot : ShadowRoot */

	constructor() {
		super()
		this._shadowRoot = this.attachShadow({ mode: 'open' })
    	this._shadowRoot.appendChild(template.content.cloneNode(true))
    	this._catchEvents()
	}

	_newGame(o /*: Main */, evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const main = o._shadowRoot.querySelector('main')
			if (main) {
				main.innerHTML = '<parasite-game></parasite-game>'
			}
		}
	}

	_catchEvents() {
		addListeners(this, [
				{ s : 'newgame', cond : o => o instanceof Config, f : (evt) => this._newGame(this, evt) }
		])
	}
}

export { Main }