// @flow strict

function style() {
	const style = document.createElement('style')
	style.textContent = `
	:host {
		flex: 1 1 auto;
	}
	`
	return style
}

export { style }
