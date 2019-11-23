// @flow strict

import { makeCustom } from '../../event.js'
import { style } from './game-style.js'

const template = document.createElement('template')

template.innerHTML = `
	<parasite-game-board></parasite-game-board>
`

class Game extends HTMLElement {

	/*::
		_shadowRoot : ShadowRoot
	*/

	constructor() {
		super()
		this._shadowRoot = this.attachShadow({ mode: 'open' })
		this._shadowRoot.appendChild(style())
    	this._shadowRoot.appendChild(template.content.cloneNode(true))
    	//this._player = null
    	this._attachEvents()
	}

	connectedCallback() {
		//this.dispatchEvent(makeCustom('config/player/ready', { self : this, number : this.getAttribute('number') }))
	}

	player() {
		//return this._player
	}

	//setPlayer(v) {
		/*this._player = v
    	this._setInputs()*/
	//}

	_setInputs() {
		/*const 	root = this._shadowRoot
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
		}*/
	}

	_attachEvents() {
		/*const 	root = this._shadowRoot
			,	inputName = root.querySelector('input[type=text]')
			,	inputColor = root.querySelector('input[type=color]')
		if (inputName && inputColor
			&& inputName instanceof HTMLInputElement
			&& inputColor instanceof HTMLInputElement) {
				inputName.oninput = (evt) => {
					const target = evt.currentTarget
					this.dispatchEvent(makeCustom('config/player/name', 
						{ self : this, number : this.getAttribute('number'), name : target.value }))
				}
				inputColor.onchange = (evt) => {
					const target = evt.currentTarget
					this.dispatchEvent(makeCustom('config/player/color', 
						{ self : this, number : this.getAttribute('number'), color : target.value }))
				}
		}*/
	}

}

export { Game }