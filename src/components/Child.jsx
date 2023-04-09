import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { BuyBookAction, SellBookAction } from '../book/bookActions'

function Child() {

  let {NumberOfBooks} = useSelector((state) => {return state})

  let dispatch = useDispatch()

  let BuyBook = () => {
    dispatch(BuyBookAction(2))
  }

  let SellBook = () => {
    dispatch(SellBookAction(3))
  }
  

  return (
    <div>
        <h1>The number of books is: {NumberOfBooks}</h1>
        <button onClick={BuyBook}>Buy Book</button>
        <button onClick={SellBook}>Sell Book</button>
    </div>
  )
}

export default Child