// @flow strict

import { Config } from './components/config/config.js'
import { Boardsize } from './components/config/boardsize/boardsize.js'
import { Player } from './components/config/player/player.js'

/*::

	export type Evt =
			'color'
		|	'name'
		|	'newgame'
		|	'ready'
		|	'size'

	export type Detail =
			{| self : Config |}
		|	{| self : Boardsize, nb : ?string |}
		|	{| self : Player, number : ?string |}
		|	{| self : Player, number : ?string, name : string |}
		|	{| self : Player, number : ?string, color : string |}

	type F = (Event) => void

	type Cond = (Detail) => bool

	type L = Array<{ s : Evt, cond : Cond, f : F }>

*/

function addListeners(self /*: HTMLElement */, l /*: L */) {
	l.forEach(({ s, cond, f }) => {
		self.addEventListener(s, (evt /*: Event */) => {
			if (evt instanceof CustomEvent) {
				const self = evt.detail.self
				if (cond(self)) {
					f(evt)
				}
			}
		})
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
