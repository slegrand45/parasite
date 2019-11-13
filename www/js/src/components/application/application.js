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

	constructor() {
		super()
		this._model = MakeModel()
		this._catchEvents()		
	}

	_newGame(o /*: Application */, evt /*: Event */) {
		console.log('Application: _newGame')
		console.log(evt)
	}

	_configBoardsizeReady(o /*: Application */, evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const cmp = evt.detail.self
			if (cmp && cmp instanceof Boardsize) {
				const size = o._model.boardsize()
				cmp.setSize(size)
			}
		}
	}

	_configBoardsize(o /*: Application */, evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const nb = evt.detail.nb
			this._model.setBoardsize(nb)
		}
	}

	_configPlayerReady(o /*: Application */, evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const n = evt.detail.number
				, cmp = evt.detail.self
			if (n > 0 && cmp && cmp instanceof Player) {
				const player = o._model.players()[n - 1]
				cmp.setPlayer(player)
			}
		}
	}

	_configPlayerName(o /*: Application */, evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const n = evt.detail.number
				, name = evt.detail.name
			if (n > 0) {
				const player = o._model.players()[n - 1]
				player.setName(name)
			}
		}
	}

	_configPlayerColor(o /*: Application */, evt /*: Event */) {
		if (evt instanceof CustomEvent) {
			const n = evt.detail.number
				, color = evt.detail.color
				, cmp = evt.detail.self
			if (n > 0) {
				const player = o._model.players()[n - 1]
				player.setColor(color)
			}
		}
	}

	_catchEvents() {
		addListeners(this, [
				{ s : 'newgame', cond : o => o instanceof Config, f : (evt) => this._newGame(this, evt) }
			,	{ s : 'ready', cond : o => o instanceof Boardsize, f : (evt) => this._configBoardsizeReady(this, evt) }
			,	{ s : 'size', cond : o => o instanceof Boardsize, f : (evt) => this._configBoardsize(this, evt) }
			,	{ s : 'ready', cond : o => o instanceof Player, f : (evt) => this._configPlayerReady(this, evt) }
			,	{ s : 'name', cond : o => o instanceof Player, f : (evt) => this._configPlayerName(this, evt) }
			,	{ s : 'color', cond : o => o instanceof Player, f : (evt) => this._configPlayerColor(this, evt) }
		])
	}

}

export { Application }