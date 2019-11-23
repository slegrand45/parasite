// @flow strict

function style() {
	const style = document.createElement('style')
	style.textContent = `
	section div.label {
		display: flex;
	}

	section div.label span.nb {
		margin-left: auto;
	}

	section label {
		font-weight: bold;
	}

	section input {
		width: 100%;
	}
	`
	return style
}

export { style }
