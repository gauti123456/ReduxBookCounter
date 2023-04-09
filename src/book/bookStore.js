// create store for redux

import {createStore} from 'redux'
import bookReducer from './bookReducer'


export const bookStore = createStore(bookReducer)