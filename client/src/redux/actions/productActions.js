

import axios from "axios";

import * as actionTypes from '../constants/productConstant';

const URL = '';

//API: using middleware //call getProducts in home component
export const getProducts = () => async (dispatch) =>
{
    try{
        //response is an object=> obj.data (data is inside response)
        const {data} = await axios.get(`${URL}/products`);
         
        //dispatch(type of req, value(payload)) will internally call productReducer fun
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
        
    }
    catch(error)
    {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message});
        //console.log('Error while calling getProducts api ', error.message);
    }
}
//import in  home.jsx


// Api call
export const getProductDetails =  (id) => async (dispatch)  => {
    try 
    {
      dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST }) ;

      const {data} = await axios.get(`${URL}/product/${id}`);
      //console.log(data);

      dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });


    }
    catch(error) 
    {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});
    }
};