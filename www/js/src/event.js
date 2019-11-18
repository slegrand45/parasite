// @flow strict

import { Config } from './components/config/config.js'
import { Board } from './components/game/board/board.js'
import { Boardsize } from './components/config/boardsize/boardsize.js'
import { Player } from './components/config/player/player.js'

/*
	export type Evt =
			'color'
		|	'name'
		|	'newgame'
		|	'ready'
		|	'size'

	export type Detail =
			{| self : Config |}
		|	{| self : Board |}
		|	{| self : Boardsize, nb : ?string |}
		|	{| self : Player, number : ?string |}
		|	{| self : Player, number : ?string, name : string |}
		|	{| self : Player, number : ?string, color : string |}

	type F = (Event) => void

	type Cond = (Detail) => bool

	type L = Array<{ s : Evt, cond : Cond, f : F }>
*/


/*::

	export type Custom =
			{| s : 'newgame', self : Config, d : {| |} |}
		|	{| s : 'ready', self : Board, d : {| |} |}
		|	{| s : 'ready', self : Boardsize, d : {| nb : ?string |} |}
		|	{| s : 'size', self : Boardsize, d : {| nb : ?string |} |}
		|	{| s : 'ready', self : Player, d : {| number : ?string |} |}
		|	{| s : 'name', self : Player, d : {| number : ?string, name : string |} |}
		|	{| s : 'color', self : Player, d : {| number : ?string, color : string |} |}

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

function makeCustom({ s, self, d } /*: Custom */) {
	return new CustomEvent(s, {
		bubbles: true,
		composed: true,
		detail : { self : self, ...d }
	})
}

export { addListeners, makeCustom }
