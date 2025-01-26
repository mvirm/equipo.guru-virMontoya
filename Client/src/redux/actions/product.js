import { GET_ALL_PRODUCTS,  GET_PRODUCT_BY_ID } from '../types' 
import axios from 'axios';
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/Utils/Alerts/Alerts'

  const URL = 'https://equipo-guru-virmontoya.onrender.com'


export const getAllProductsAction = () => {
    return async (dispatch) => {
    try {
            const response = await axios.get(`${URL}/product`);
            const products = response.data;
            console.log('poductos en action', products);
            
            dispatch({ type: GET_ALL_PRODUCTS, payload: products });        
    } catch (error) {
        console.log('error de action', error);
        sweetAlertsError(
            "Try again",
            "Products not found",
            "Ok"
          );
    }

}};