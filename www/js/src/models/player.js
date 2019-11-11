// @flow strict

/*::
	
	export type T = {
			number : () => number
		,	setNumber : (number) => void
		,	name : () => string
		,	setName : (string) => void
		,	color : () => string
		,	setColor : (string) => void
	}

*/

function Make(_number /*: number */, _name /*: string */, _color /*: string */) /*: T */ {
	const _data = {
			number : _number
		,	name : _name
		,	color : _color
	}
	, number = () => {
		return _data.number
	}
	, setNumber = (v) => {
		_data.number = v
	}
	, name = () => {
		return _data.name
	}
	, setName = (v) => {
		_data.name = v
	}
	, color = () => {
		return _data.color
	}
	, setColor = (v) => {
		_data.color = v
	}
	return(Object.freeze({
			number 
		,	setNumber
		,	name
		,	setName
		,	color
		,	setColor
	}))
}

export { Make }
