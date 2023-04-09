import { BUY_BOOK, SELL_BOOK } from "./bookTypes"

export const BuyBookAction = (number) => {
    return {
        type:BUY_BOOK,
        payload:number
    }
}

export const SellBookAction = (number) => {
    return {
        type:SELL_BOOK,
        payload:number
    }
}