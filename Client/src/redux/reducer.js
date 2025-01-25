import {CREATE_SUBSCRIBER,  GET_ALL_PRODUCTS,  GET_PRODUCT_BY_ID } from './types'
const initialState = {
    subscriptor: {},
    products: [],
    product: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUBSCRIBER:
            return {
                ...state,
                subscriptor: action.payload
            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        default:
            return {
                ...state
            };
    }
}

export default rootReducer