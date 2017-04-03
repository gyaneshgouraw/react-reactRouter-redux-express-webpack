import * as types from './ActionTypes'


/**
@function getRepoNames
@returns {action} GET_REPO_NAMES
@description This is an action which is dispatched at for getting repo names
*/
export const getRepoNames = () => {
	return {
		type : types.GET_REPO_NAMES,
	}
}


/**
@function setRepoNames
@returns {action} SET_REPO_NAMES
@description This is an action which is dispatched at for setting repo names
*/
export const setRepoNames = (data) => {
	return {
		type : types.SET_REPO_NAMES,
        data
	}
}


/**
@function resetRepos
@returns {action} RESET_REPO_NAMES
@description This is an action which is dispatched at for resetting repo names
*/
export const resetRepos = (data) => {
	return {
		type : types.RESET_REPO_NAMES,
        data
	}
}



