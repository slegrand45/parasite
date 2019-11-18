// @flow strict

import { makeCustom } from '../../../event.js'

const template = document.createElement('template')

template.innerHTML = `
	<link rel="stylesheet" href="js/src/components/config/boardsize/boardsize.css">
	<section class="boardsize">
		<label>
			<div class="label">
				<span>Boardsize</span>
				<span class="nb">10</span>
			</div>
			<input type="range" value="10" max="100" min="10" step="10" />
		</label>
	</section>
`

class Boardsize extends HTMLElement {

	/*::
		_shadowRoot : ShadowRoot
	*/

	constructor() {
		super()
		this._shadowRoot = this.attachShadow({ mode: 'open' })
    	this._shadowRoot.appendChild(template.content.cloneNode(true))
    	this._attachEvents()
	}

	connectedCallback() {
		const 	root = this._shadowRoot
			,	nb = root.querySelector('.nb')
		if (nb) {
			this.dispatchEvent(makeCustom({ s : 'ready', self : this, d : { nb : nb.textContent }}))
		}
	}

	setSize(v /*: string */) {
		const 	root = this._shadowRoot
			,	input = root.querySelector('input[type=range]')
			,	nb = root.querySelector('.nb')
		if (input && nb && input instanceof HTMLInputElement) {
			input.value = v
			nb.textContent = v
		}
	}

	_attachEvents() {
		const 	root = this._shadowRoot
			,	input = root.querySelector('input[type=range]')
			,	nb = root.querySelector('.nb')
		if (input && nb) {
			input.oninput = (evt) => {
				const target = evt.currentTarget
				nb.textContent = target.value
			}
			input.onchange = (evt) => {
				const target = evt.currentTarget
				this.dispatchEvent(makeCustom({ s : 'size', self : this, d : { nb : target.value }}))
			}
		}
	}

}

export { Boardsize }