// @flow strict

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
	}

}

export { Main }