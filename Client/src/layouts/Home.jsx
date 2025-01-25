import { useState, useEffect } from "react";
import Spinner from "../components/Utils/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../redux/actions/product";
import CardContainer from "../components/Home/CardContainer";
import NavigateButton from "../components/Utils/Buttons/NavigateButton";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const subscriptor = useSelector((state) => state.subscriptor)

    const emailSubscritor = subscriptor && subscriptor.email ? subscriptor.email : localStorage.getItem('emailSubscribe')
    const dispatch = useDispatch()
    const button = {title: 'Me!', path: '/about'}

    useEffect(() => {
          dispatch(getAllProductsAction()); 
          setTimeout(function(){
            setIsLoading(false) 
        }, 3000)
      }, [dispatch, subscriptor]);
      

    return (
    <div>
        {isLoading ?
            <div className="h-screen flex items-center justify-center">
                <Spinner/>
            </div> 
            :<div> 

                <div className="flex-grow flex items-center justify-between lg:my-8">
                    <img src="/public/iconoColor.svg" alt="icono" className="w-16 h-auto ml-10 animate-pulse"/>
                    <h1 className="text-2xl md:text-[32px] font-bold font-Inter text-white ">WELCOME {emailSubscritor}</h1>
                    <NavigateButton
                        title={button.title}
                        path={button.path}
                    />
                    
                </div>
               <div className="flex-grow flex items-center justify-center md:mx-auto lg:my-2">
                    <CardContainer />
                </div> 
            </div>
        }
    </div> 
    )
}

export default Home;