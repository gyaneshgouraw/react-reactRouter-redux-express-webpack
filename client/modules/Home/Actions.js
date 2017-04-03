import * as types from './ActionTypes'


/**
@function getAuthorName
@returns {action} GET_AUTHOR_NAME
@description This is an action which is dispatched at for getting author name
*/
export const getAuthorName = () => {
	return {
		type : types.GET_AUTHOR_NAME,
	}
}


/**
@function setAuthorName
@returns {action} SET_AUTHOR_NAMES
@description This is an action which is dispatched at for setting author name
*/
export const setAuthorName = (data) => {
	return {
		type : types.SET_AUTHOR_NAME,
        data
	}
}



/**
@function resetAuthorName
@returns {action} RESET_AUTHOR_NAMES
@description This is an action which is dispatched at for resetting author name
*/
export const resetAuthorName = () => {
	return {
		type : types.RESET_AUTHOR_NAME
	}
}



