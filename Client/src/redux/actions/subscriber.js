import axios from 'Axios';
import { CREATE_SUBSCRIBER } from "../types";
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from '../../components/Utils/Alerts/Alerts'

 const URL = 'http://localhost:3001'

export const createSubscriberAction = (input) => {
  console.log('input en action', input);
  
    return async (dispatch) => {
    try {
            const response = await axios.post(`${URL}/subscriber/create`, input);
            console.log(response);
            
            const data = response.data;
            dispatch({ type: CREATE_SUBSCRIBER, payload: data });
            sweetAlertsSuccessfully(
                `Congratulations ${input}`,
                "You have already been subscribed",
                "Ok"
              );
            
    } catch (error) {
        console.log('error de action', error);
        sweetAlertsError(
            "Try again",
            "We were unable to complete the subscription",
            "Ok"
          );
    }

}}