import authedUser from './authedUser';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    loadingBar: loadingBarReducer,
})