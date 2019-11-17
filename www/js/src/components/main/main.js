// @flow strict

import { makeCustom, addListeners } from '../../event.js'
import { start as routerStart, makePage } from '../../router.js'
import { Config } from '../config/config.js'

const template = document.createElement('template')

const home = makePage('/')

template.innerHTML = `
	<link rel="stylesheet" href="js/src/components/main/main.css">
	<header>
		<div>
			<a href="${ home }">Parasite</a>
		</div>
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
		routerStart(() => this._shadowRoot.querySelector('main'))
	}	

}

export { Main }