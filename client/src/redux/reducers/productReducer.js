
//import { CallToActionOutlined } from '@mui/icons-material'
import * as actionType from '../constants/productConstant'

// default reducers have 2 args (state, action).. state=current state|action=updated action(after dispatch) 
//empty array product to save ui from breaking
export const getProductsReducer = (state = {products:[]
}, action) =>
{
    //switch to differentiate b/w success or failure
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products: action.payload}
        
        case actionType.GET_PRODUCTS_FAIL:
            return {error: action.payload}

        default:
            return state  //state is current state

    }
}

//import in store.js 



export const getProductDetailsReducer = (state= {product: {} }, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }

        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case actionType.GET_PRODUCT_DETAILS_RESET:
            return { PRODUCT: {} }

        default:
            return state
        
        
    }
}
