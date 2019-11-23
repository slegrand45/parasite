// @flow strict

/*::

	import type { T as Model } from '../../model.js'

*/

import { addListeners } from '../../event.js'
import { goToPage } from '../../router.js'
import { Make as MakeModel } from '../../model.js'
import { Board } from '../game/board/board.js'
import { Boardsize } from '../config/boardsize/boardsize.js'
import { Config } from '../config/config.js'
import { Player } from '../config/player/player.js'

class Application extends HTMLElement {

	/*:: _model : Model */


/*
	TODO:
	Interface
	dans composants, une méthode pour set des data depuis l'application ??
*/

	constructor() {
		super()
		this._model = MakeModel()
		this._catchEvents()		
	}

	_newGame(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			goToPage('/game')
		}
	}

	_configBoardsizeReady(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const cmp = evt.detail.self
			if (cmp && cmp instanceof Boardsize) {
				const size = this._model.boardsize()
				cmp.setSize(size)
			}
		}
	}

	_configBoardsize(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const nb = evt.detail.nb
			this._model.setBoardsize(nb)
		}
	}

	_configPlayerReady(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const n = evt.detail.number
				, cmp = evt.detail.self
			if (n > 0 && cmp && cmp instanceof Player) {
				const player = this._model.players()[n - 1]
				cmp.setPlayer(player)
			}
		}
	}

	_configPlayerName(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const n = evt.detail.number
				, name = evt.detail.name
			if (n > 0) {
				const player = this._model.players()[n - 1]
				player.setName(name)
			}
		}
	}

	_configPlayerColor(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const n = evt.detail.number
				, color = evt.detail.color
			if (n > 0) {
				const player = this._model.players()[n - 1]
				player.setColor(color)
			}
		}
	}

	_gameBoardReady(evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const cmp = evt.detail.self
			cmp.init(this._model.boardsize())
		}
	}

	_catchEvents() {
		addListeners(this, [
				{ s : 'ready', cond : (o /*: Board */) => o instanceof Board, f : (evt) => this._gameBoardReady(evt) }
			,	{ s : 'ready', cond : (o /*: Boardsize */) => o instanceof Boardsize, f : (evt) => this._configBoardsizeReady(evt) }
			,	{ s : 'size', cond : (o /*: Boardsize */) => o instanceof Boardsize, f : (evt) => this._configBoardsize(evt) }
			,	{ s : 'newgame', cond : (o /*: Config */) => o instanceof Config, f : (evt) => this._newGame(evt) }
			,	{ s : 'ready', cond : (o /*: Player */) => o instanceof Player, f : (evt) => this._configPlayerReady(evt) }
			,	{ s : 'name', cond : (o /*: Player */) => o instanceof Player, f : (evt) => this._configPlayerName(evt) }
			,	{ s : 'color', cond : (o /*: Player */) => o instanceof Player, f : (evt) => this._configPlayerColor(evt) }
		])
	}

}

export { Application }