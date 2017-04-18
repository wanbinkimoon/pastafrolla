import {combineReducers} from 'redux';
import Reducer from './reducer-hello';
import ActiveReducer from './reducer-active-hello';

const allReducers = combineReducers({
    hello: Reducer,
    activeUser: ActiveReducer
});

export default allReducers
