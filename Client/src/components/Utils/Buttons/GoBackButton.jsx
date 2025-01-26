import { useNavigate } from "react-router-dom"

const GoBackButton = () => {
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate(-1)
    }

    return (
        <button className="bg-transparent border-none outline-none" onClick={goBackHandler}>
            <img src="goBackIcon.svg" alt="goBack"/>
        </button>
    )

}

export default GoBackButton