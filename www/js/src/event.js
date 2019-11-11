// @flow strict

/*::

	export type Evt =
			'config/boardsize/ready'
		|	'config/boardsize/size'
		| 	'config/player/ready'
		| 	'config/player/name'
		| 	'config/player/color'

	export type Detail =
			{| self : HTMLElement, number : ?string |}
		|	{| self : HTMLElement, number : ?string, name : string |}
		|	{| self : HTMLElement, number : ?string, color : string |}
		|	{| self : HTMLElement, nb : string |}

	type F = (Event) => void
	type L = Array<{ evt : Evt, f : F }>

*/

function addListeners(self /*: HTMLElement */, l /*: L */) {
	l.forEach(({ evt, f }) => {
		self.addEventListener(evt, f)
	})
}

function makeCustom(evt /*: Evt */, detail /*: Detail */) {
	return new CustomEvent(evt, {
		bubbles: true,
		composed: true,
		detail
	})
}

export { addListeners, makeCustom }
