import { useNavigate } from "react-router-dom"

export function ActiveButton({label}) {
    const navigate = useNavigate();
    let option;
    if (label=="Sign up"){
        option = "/signup";
    }
    if (label=="Sign in"){
        option = "/signin";
    }
    return <button onClick={() =>navigate(option)} type="button" class="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}