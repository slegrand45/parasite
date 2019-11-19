// @flow strict

/*::

	import type { T_Ro as ModelPlayer } from './../../../models/player.js'

	export type CustomEvent =
		|	{| s : 'ready', self : Player, d : {| number : ?string |} |}
		|	{| s : 'name', self : Player, d : {| number : ?string, name : string |} |}
		|	{| s : 'color', self : Player, d : {| number : ?string, color : string |} |}

*/

import { makeCustom } from '../../../event.js'

const template = document.createElement('template')

template.innerHTML = `
	<link rel="stylesheet" href="js/src/components/config/player/player.css">
	<div class="wrapper">
		<input type="text" />
		<input type="color" />
	</div>
`

class Player extends HTMLElement {

	/*::
		_shadowRoot : ShadowRoot
		_player : ?ModelPlayer
	*/

	constructor() {
		super()
		this._shadowRoot = this.attachShadow({ mode: 'open' })
    	this._shadowRoot.appendChild(template.content.cloneNode(true))
    	this._player = null
    	this._attachEvents()
	}

	connectedCallback() {
		this.dispatchEvent(makeCustom({ s : 'ready', self : this, d : { number : this.getAttribute('number') }}))
	}

	player() {
		return this._player
	}

	setPlayer(v /*: ModelPlayer */) {
		this._player = v
    	this._setInputs()
	}

	_setInputs() {
		const 	root = this._shadowRoot
			,	inputName = root.querySelector('input[type=text]')
			,	inputColor = root.querySelector('input[type=color]')
		if (inputName && inputColor
			&& inputName instanceof HTMLInputElement
			&& inputColor instanceof HTMLInputElement) {
			const player = this.player()
			if (player) {
				inputName.value = player.name()
				inputColor.value = player.color()
			}
		}
	}

	_attachEvents() {
		const 	root = this._shadowRoot
			,	inputName = root.querySelector('input[type=text]')
			,	inputColor = root.querySelector('input[type=color]')
		if (inputName && inputColor
			&& inputName instanceof HTMLInputElement
			&& inputColor instanceof HTMLInputElement) {
				inputName.oninput = (evt) => {
					const target = evt.currentTarget
					this.dispatchEvent(makeCustom({ s : 'name',
						self : this, d : { number : this.getAttribute('number'), name : target.value }}))
				}
				inputColor.onchange = (evt) => {
					const target = evt.currentTarget
					this.dispatchEvent(makeCustom({ s : 'color',
						self : this, d : { number : this.getAttribute('number'), color : target.value }}))
				}
		}
	}

}

export { Player }