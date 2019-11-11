// @flow strict

import { Application } from './components/application/application.js'
import { Main } from './components/main/main.js'
import { Boardsize } from './components/config/boardsize/boardsize.js'
import { Player } from './components/config/player/player.js'

function main() {
	customElements.define('parasite-application', Application)
	customElements.define('parasite-main', Main)
	customElements.define('parasite-config-boardsize', Boardsize)
	customElements.define('parasite-config-player', Player)
}

export { main }