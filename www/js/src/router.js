// @flow strict

/*::

	type Location =
			'/'
		|	'/game'
		|	'/error404'

	type Routes = {
		[Location] : (Array<string>) => void
	}

*/

function makePage(page /*: Location */) {
	return('/#' + page)
}

function goToPage(page /*: Location */) {
	document.location.assign(makePage(page))
}

function start(getRootNode /*: () => ?HTMLElement */) {
	const setContent = (elem, html) => {
		if (elem) {
			elem.innerHTML = html
		}
	}

	const error404 = () => {
		setContent(getRootNode(), 'Error 404!')
	}

	const routeOfString = (s) => {
		switch (s) {
			case '/':
			case '/game':
			case '/error404':
				return s
			default:
				return '/error404'
		}
	}

	const routes /*: Routes */ = {
		'/'			: (rest) => {
			setContent(getRootNode(), '<parasite-config></parasite-config>')
		}
		, '/game'	: (rest) => {
			setContent(getRootNode(), '<parasite-game></parasite-game>')
		}
		/*
		, '/edit'	: (rest) => {
			if (rest[0] === 'id') {
				const id = rest[1]
				setContent('main', '...')
			} else {
				error404()
			}
		}
		*/
		, '/error404': (_) => error404()
	}

	const parseRequestURL = () => {
		let url = location.hash.slice(1).toLowerCase() || '/';
		let r = url.split("/")
		let request = {
			resource    : r[1],
			rest		: r.slice(2),
		}
		return request
	}

	const router = async () => {
	    let request = parseRequestURL()
	    let parsedURL = routeOfString(request.resource ? '/' + request.resource : '/')
	    routes[parsedURL] ? routes[parsedURL](request.rest) : routes['/error404']([])
	}

	window.addEventListener('hashchange', router)
	window.addEventListener('load', router)

}

export { start, makePage, goToPage }
