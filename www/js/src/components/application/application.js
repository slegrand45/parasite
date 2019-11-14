// @flow strict

/*::

	import type { T as Model } from '../../model.js'

*/

import { addListeners } from '../../event.js'
import { Make as MakeModel } from '../../model.js'
import { Config } from '../config/config.js'
import { Boardsize } from '../config/boardsize/boardsize.js'
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
		console.log('Application: _newGame')
		console.log(evt)
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
				, cmp = evt.detail.self
			if (n > 0) {
				const player = this._model.players()[n - 1]
				player.setColor(color)
			}
		}
	}

	_catchEvents() {
		addListeners(this, [
				{ s : 'newgame', cond : o => o instanceof Config, f : (evt) => this._newGame(evt) }
			,	{ s : 'ready', cond : o => o instanceof Boardsize, f : (evt) => this._configBoardsizeReady(evt) }
			,	{ s : 'size', cond : o => o instanceof Boardsize, f : (evt) => this._configBoardsize(evt) }
			,	{ s : 'ready', cond : o => o instanceof Player, f : (evt) => this._configPlayerReady(evt) }
			,	{ s : 'name', cond : o => o instanceof Player, f : (evt) => this._configPlayerName(evt) }
			,	{ s : 'color', cond : o => o instanceof Player, f : (evt) => this._configPlayerColor(evt) }
		])
	}

}

export { Application }