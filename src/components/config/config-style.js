// @flow strict

function style() {
	const style = document.createElement('style')
	style.textContent = `
	:host {
		flex: 1 1 auto;
	}

	form {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

	.players {
		margin-top: 2rem;
	}

	.players label {
		font-weight: bold;
		display: block;
	}

	.players parasite-config-player {
		margin-bottom: 1rem;
		display: block;
	}

	.buttons {
		text-align: center;
		margin-top: 2rem;
	}

	.buttons input[type=button] {
		background-color: #00d1b2;
		border-color: transparent;
		color: #fff;
		padding: 0.75em;
		font-size: 1rem;
	}

	`
	return style
}

export { style }
