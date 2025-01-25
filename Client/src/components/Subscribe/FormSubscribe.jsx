import ButtonSubscribe from "./ButtonSubscribe";
import { useState } from "react";
import validation from "./validations";

const FormSubscribe = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const inputHandler = (e) => {
        setInput(e.target.value)
        setError(validation(e.target.value))
    }
    
    return (
        <form>
            <div className="flex flex-col items-center justify-center gap-[15px]">
            <div className="flex flex-col items-start justify-center">
            <label htmlFor="email" className="font-Inter font-medium text-[15px] text-customGray">Enter Your Email</label> 
            <input
            className="w-[264px] md:w-[485px] border-b-2 border-customGray focus:outline-none focus:border-yellowGreen"
            id="email"
            type="email"
            name="email"
            value={input}
            onChange={inputHandler}
            />
            {error !== '' ? <p className="font-Inter font-small text-[8px] text-red-600">{error}</p> : null}
            </div>
            <div className="mt-10">
            <ButtonSubscribe/>
            </div> 
            </div>
        </form>
    )
}

export default FormSubscribe;