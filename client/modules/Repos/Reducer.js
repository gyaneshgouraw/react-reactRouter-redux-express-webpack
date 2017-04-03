/**
 * Import action constants
 */
import * as types from './ActionTypes'


/**
 *	@function repos
 *  @param {object} state
 *  @param {object} action
 *	@description This is a repos reducer which updates
 *  the repos store based different action types like
 */

const repos = function (state = {repoList:[]}, action) {
  switch (action.type) {
    case types.SET_REPO_NAMES:{
        return {
            ...state,
            repoList: action.data
        }
    }

    case types.GET_REPO_NAMES :{
        return{
            ...state
        }
    }

    case types.RESET_REPO_NAMES :{
        return{
            ...state,
            repoList:[]
        }
    }

    default:
      return state
  }
}

export default repos