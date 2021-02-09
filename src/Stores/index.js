import {combineReducers} from 'redux';
import Login from './Reducers/login';

const appReducer = combineReducers({
  loginState: Login,
});

export default appReducer;
