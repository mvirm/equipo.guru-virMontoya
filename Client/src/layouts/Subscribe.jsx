import FormSubscribe from "../components/Subscribe/FormSubscribe"


const Subscribe = () => {
    return (
        <div className="flex-grow flex items-center justify-center">
          <div className="w-[374px] h-[422px] bg-white rounded-[50px] p-[55px] gap-[66px] flex flex-col items-center justify-center md:w-[841px] md:h-auto md:px-44 md:py-[70px]">
            <img src="/public/icono.svg" alt="icono" className="w-[58.43px] h-auto" />
            <h1 className="text-[32px] font-bold font-Inter capitalize">SUBSCRIBE</h1>
            <FormSubscribe />
          </div>
        </div>
      );
}

export default Subscribe