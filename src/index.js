 	import { main } from './main.js'
 	function ready() {
 		if (document.readyState != 'loading') {
 			main()
 		} else {
 			document.addEventListener('DOMContentLoaded', main)
 		}
 	}
 	ready()
