import { useNavigate } from "react-router-dom"

const NavigateButton = ({title, path}) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(path)
    }

    return (
        <button onClick={onClickHandler} className="w-fit h-fit rounded-[50px] bg-customGray font-Inter  text-white text-sm mr-6 md:text-base font-bold gap-[10px] hover:bg-gray-700">{title}</button>
    )

}

export default NavigateButton