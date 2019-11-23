// @flow strict

function style() {
	const style = document.createElement('style')
	style.textContent = `
	.wrapper {
		display: flex;
	}

	input[type=text] {
		flex: auto;
	}
	`
	return style
}

export { style }
