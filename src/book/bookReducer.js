import { BUY_BOOK, SELL_BOOK } from "./bookTypes"


const initialState = {
    NumberOfBooks: 20
}

const bookReducer = (state=initialState,action) => {
    console.log("reducer function called " + action)
    switch(action.type){
        case BUY_BOOK:
            return {
                ...state,NumberOfBooks:state.NumberOfBooks - action.payload
            }
        case SELL_BOOK:
            return {
                ...state,NumberOfBooks:state.NumberOfBooks + action.payload
            }
        default:{
            return state
        }
    }
}

export default bookReducer