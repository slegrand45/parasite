// @flow strict

function style() {
  const style = document.createElement('style')
  style.textContent = `
  :host {
    overflow: auto;
    width: 80vw;
    max-width: 80vw;
    height: 75vh;
    max-height: 75vh;
    display: block;
    padding: .75rem;
    margin: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin:	auto;
  }

  table td {
    width: 2em;
    background-color: white;
    padding: 2px;
    text-align: center;
    border: 1px solid #dbdbdb;
    vertical-align: top;
  }

  table.board-10 {
    height: calc(11 * 1em);
    width: calc(11 * 2em);
  }

  table.board-20 {
    height: calc(21 * 1em);
    width: calc(21 * 2em);
  }

  table.board-30 {
    height: calc(31 * 1em);
    width: calc(31 * 2em);
  }

  table.board-40 {
    height: calc(41 * 1em);
    width: calc(41 * 2em);
  }

  table.board-50 {
    height: calc(51 * 1em);
    width: calc(51 * 2em);
  }

  table.board-60 {
    height: calc(61 * 1em);
    width: calc(61 * 2em);
  }

  table.board-70 {
    height: calc(71 * 1em);
    width: calc(71 * 2em);
  }

  table.board-80 {
    height: calc(81 * 1em);
    width: calc(81 * 2em);
  }

  table.board-90 {
    height: calc(91 * 1em);
    width: calc(91 * 2em);
  }

  table.board-100 {
    height: calc(101 * 1em);
    width: calc(101 * 2em);
  }
  `
  return style
}

export { style }
