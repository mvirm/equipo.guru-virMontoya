import Footer from "../components/Footer"
import FormSubscribe from "../components/Subscribe/FormSubscribe"


const Subscribe = () => {
    return (
        <div>
            <div>
                <img src="/public/icono.svg" alt="icono"/>
                <h1>SUBSCRIBE</h1>
                <FormSubscribe />
            </div>
           <Footer/> 
        </div>
    )
}

export default Subscribe