import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED
} from "./constants"

// setSearchFied is an action
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //constant name
    payload: text // value that was recieved thru input
})  

//Note: just remove comment notation to test
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder:typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}







