// @flow strict

import { Application } from './components/application/application.js'
import { Main } from './components/main/main.js'
import { Config } from './components/config/config.js'
import { Boardsize } from './components/config/boardsize/boardsize.js'
import { Player } from './components/config/player/player.js'
import { Game } from './components/game/game.js'
import { Board } from './components/game/board/board.js'

function main() {
	customElements.define('parasite-application', Application)
	customElements.define('parasite-main', Main)
	customElements.define('parasite-config', Config)
	customElements.define('parasite-config-boardsize', Boardsize)
	customElements.define('parasite-config-player', Player)
	customElements.define('parasite-game', Game)
	customElements.define('parasite-game-board', Board)
}

export { main }