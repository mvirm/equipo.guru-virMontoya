import ButtonSubscribe from "./ButtonSubscribe";

const FormSubscribe = () => {
    return (
        <form>
            <div className="flex flex-col items-center justify-center gap-[15px]">
            <div className="flex flex-col items-start justify-center">
            <label className="font-Inter font-medium text-[15px] text-customGray">Enter Your Email</label> 
            <input
            className="w-[264px] md:w-[485px] border-b-2 border-customGray focus:outline-none focus:border-yellowGreen"
              id="email"
              type="email"
              name="email"
            />
            </div>
            <div className="mt-10">
            <ButtonSubscribe/>
            </div> 
            </div>
        </form>
    )
}

export default FormSubscribe;