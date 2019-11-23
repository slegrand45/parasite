// @flow strict

import { Config } from './components/config/config.js'
import { Board } from './components/game/board/board.js'
import { Boardsize } from './components/config/boardsize/boardsize.js'
import { Player } from './components/config/player/player.js'

/*::

	import type { CustomEvent as EvtConfig } from './components/config/config.js'
	import type { CustomEvent as EvtBoard } from './components/game/board/board.js'
	import type { CustomEvent as EvtBoardsize } from './components/config/boardsize/boardsize.js'
	import type { CustomEvent as EvtPlayer } from './components/config/player/player.js'

	export type Custom =
		| EvtConfig
		| EvtBoard
		| EvtBoardsize
		| EvtPlayer

	type Listener =
			{| s : 'newgame', cond : (Config) => bool |}
		|	{| s : 'ready', cond : (Board) => bool |}
		|	{| s : 'ready', cond : (Boardsize) => bool |}
		|	{| s : 'size', cond : (Boardsize) => bool |}
		|	{| s : 'ready', cond : (Player) => bool |}
		|	{| s : 'name', cond : (Player) => bool |}
		|	{| s : 'color', cond : (Player) => bool |}

	type L = Array<{ ...Listener, f : (Event) => void }>
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

function makeCustom(o /*: Custom */) {
	let detail = { self : o.self }
	if (o.d) {
		detail = { self : o.self, ...o.d }
	}
	return new CustomEvent(o.s, {
		bubbles: true,
		composed: true,
		detail
	})
}

export { addListeners, makeCustom }
