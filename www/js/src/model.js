// @flow strict

/*::

	import type { T as Player } from './models/player.js'

	export type T = {
			boardsize : () => number
		,	setBoardsize : (number) => void
		,	players : () => Array<Player>
		,	setPlayers : (Array<Player>) => void
	}

*/

import { Make as MakePlayer } from './models/player.js'

function Make() /*: T */ {
	const _data = {
			boardsize : 10
		,	players : [
					MakePlayer(1, 'Player 1', '#0074d9')
				,	MakePlayer(2, 'Player 2', '#ff851b')
			]
	}
	, boardsize = () => {
		return _data.boardsize
	}
	, setBoardsize = (v) => {
		_data.boardsize = v
	}
	, players = () => {
		return _data.players
	}
	, setPlayers = (v) => {
		_data.players = v
	}
	return(Object.freeze({
			boardsize
		,	setBoardsize
		,	players
		,	setPlayers
	}))
}

export { Make }
