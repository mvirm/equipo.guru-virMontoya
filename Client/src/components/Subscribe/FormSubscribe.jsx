import ButtonSubscribe from "./ButtonSubscribe";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validation from "./validations";
import {createSubscriberAction} from '../../redux/actions/subscriber'
import { useNavigate } from "react-router-dom";


const FormSubscribe = () => {
    const [input, setInput] = useState({
        email: '',
    });
    const [error, setError] = useState({
        email: ''
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputHandler = (e) => {
        setInput({
            email: e.target.value})
        setError(validation({
            email: e.target.value}))
        console.log('en form', input);
        
    }
    const submitHandler = (e) => {
        e.preventDefault();
       if (input.email !== '') {
           dispatch(createSubscriberAction(input))
           localStorage.setItem('emailSubscribe', input.email)
           console.log('despacho la action');
           setInput({email: ''})
           setError({email: ''})
           setTimeout(function(){
            navigate('/home') 
        }, 1500)

       } 
    }

    //submit con la tecla enter
    const keyPressHandler = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit(e); 
        }
      };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="flex flex-col items-center justify-center gap-[15px]">
            <div className="flex flex-col items-start justify-center">
            <label htmlFor="email" className="font-Inter font-medium text-[15px] text-customGray">Enter Your Email</label> 
            <input
            className="w-[264px] md:w-[485px] border-b-2 border-customGray focus:outline-none focus:border-yellowGreen"
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={inputHandler}
            onKeyPress={keyPressHandler}
            />
            {error.email !== '' ? <p className="font-Inter font-small text-[8px] text-red-600">{error.email}</p> : null}
            </div>
            <div className="mt-10">
            <ButtonSubscribe/>
            </div> 
            </div>
        </form>
    )
}

export default FormSubscribe;