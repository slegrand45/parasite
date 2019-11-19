// @flow strict

/*::

	export type CustomEvent =
		|	{| s : 'newgame', self : Config |}

*/

import { makeCustom } from '../../event.js'

const template = document.createElement('template')

template.innerHTML = `
	<link rel="stylesheet" href="js/src/components/config/config.css">
	<form>
		<parasite-config-boardsize></parasite-config-boardsize>
		<section class="players">
			<label>
				Players
			</label>
			<parasite-config-player number="1"></parasite-config-player>
			<parasite-config-player number="2"></parasite-config-player>
		</section>
		<section class="buttons">
			<input type="button" value="New game" />
		</section>
	</form>
`

class Config extends HTMLElement {

	/*:: _shadowRoot : ShadowRoot */

	constructor() {
		super()
		this._shadowRoot = this.attachShadow({ mode: 'open' })
    	this._shadowRoot.appendChild(template.content.cloneNode(true))
    	this._attachEvents()
	}

	_attachEvents() {
		const 	root = this._shadowRoot
			,	bt = root.querySelector('input[type=button]')
		if (bt) {
			bt.onclick = (evt) => {
				this.dispatchEvent(makeCustom({ s : 'newgame', self : this }))
			}
		}
	}

}

export { Config }