import { combineReducers } from 'redux';
import MyButtonReducer from './MyButtonReducer';
import MyHeaderReducer from './MyHeaderReducer';
import {intlReducer} from 'react-intl-redux'


const myApp = combineReducers({
    intl: intlReducer,
    MyButtonReducer,
    MyHeaderReducer
})

export default myApp