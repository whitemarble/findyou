import { combineReducers } from 'redux';
import MyButtonReducer from './MyButtonReducer';
import MyHeaderReducer from './MyHeaderReducer';


const myApp = combineReducers({
    MyButtonReducer,
    MyHeaderReducer
})

export default myApp