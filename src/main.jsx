import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import { bookStore } from './book/bookStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={bookStore}>
    <App />
  </Provider>,
)
