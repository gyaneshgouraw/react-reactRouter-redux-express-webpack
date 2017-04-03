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

const home = function (state = {author:''}, action) {
  switch (action.type) {
    case types.SET_AUTHOR_NAME:{
        return {
            ...state,
            author: action.data
        }
    }

    case types.GET_AUTHOR_NAME :{
        return{
            ...state
        }
    }

    case types.RESET_AUTHOR_NAME :{
        return{
            ...state,
            author:''
        }
    }

    default:
      return state
  }
}

export default home