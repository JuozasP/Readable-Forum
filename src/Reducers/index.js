import { combineReducers } from 'redux';

function comments(state={}, action) {
    switch (action.type){
        case GET_COOMENTS:
            return{...state};
    }
}

export default combineReducers()