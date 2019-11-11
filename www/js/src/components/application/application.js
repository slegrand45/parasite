// @flow strict

/*::

	import type { T as Model } from '../../model.js'

*/

import { addListeners } from '../../event.js'
import { Make as MakeModel } from '../../model.js'
import { Boardsize } from '../config/boardsize/boardsize.js'
import { Player } from '../config/player/player.js'

class Application extends HTMLElement {

	/*:: _model : Model */

	constructor() {
		super()
		this._model = MakeModel()
		this._catchEvents()		
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

	_catchEvents() {
		addListeners(this, [
				{ evt : 'config/boardsize/ready', f : this._configBoardsizeReady }
			,	{ evt : 'config/boardsize/size', f : this._configBoardsize }
			,	{ evt : 'config/player/ready', f : this._configPlayerReady }
			,	{ evt : 'config/player/name', f : this._configPlayerName }
			,	{ evt : 'config/player/color', f : this._configPlayerColor }
		])
	}

}

export { Application }