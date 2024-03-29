// @flow strict

function style() {
	const style = document.createElement('style')
	style.textContent = `
	:host {
		min-height: 100vh;
		display: grid;
		grid-template-areas:
		"h"
		"m"
		"f";
		grid-template-rows: auto 1fr auto;
	}

	a:hover {
		color: #363636;
	}

	a {
		color: #3273dc;
		cursor: pointer;
		text-decoration: none;
	}

	header {
		grid-area: h;
		display: flex;
		justify-content: center;
	}

	header div {
		flex: 1 1 auto;
		text-align: center;
	}

	main {
		grid-area: m;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	footer {
		grid-area: f;
		text-align: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: #fafafa;
	}
	`
	return style
}

export { style }
