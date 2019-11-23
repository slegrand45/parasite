// @flow strict

/*::

	export type CustomEvent =
		|	{| s : 'ready', self : Board |}

*/

import { makeCustom } from '../../../event.js'
import { style } from './board-style.js'

const template = document.createElement('template')

template.innerHTML = `
	<table></table>
`

class Board extends HTMLElement {

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
		this.dispatchEvent(makeCustom({ s : 'ready', self : this }))
	}

	init(size /*: number */) {
		const n = parseInt(size, 10)
		console.log(n)
		let html = ''
		for(let i = 0; i < n; i++) {
			html += '<tr>'
			for(let j = 0; j < n; j++) {
				html += `<td data-x="${ j }" data-y="${ i }">&nbsp;</td>`
			}
			html += '</tr>'
		}
		const root = this._shadowRoot
			,	table = root.querySelector('table')
		if (table) {
			table.classList.add('board-' + size)
			table.innerHTML = html
		}
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

export { Board }