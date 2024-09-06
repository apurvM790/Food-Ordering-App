import { useNavigate } from "react-router-dom";
import { EMPTY_CART_IMG } from "../utils/constants";

const EmptyCart = ()=>{
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/");
    }
    return <div className="w-screen mt-28 flex flex-col justify-center items-center">
        <div>
            <img className="size-72" src={EMPTY_CART_IMG}/>
        </div>
        <div>
            <h1 className="font-semibold text-xl text-gray-700 mt-2 p-2">Your Cart Is Empty</h1>
        </div>
        <div>
            <h1 className="font-thin text-base text-gray-400 mb-2 ">You can go to home page to view more restaurants</h1>
        </div>
        <div>
            <button className="m-4 px-4 py-2 font-semibold text-lg text-white bg-orange-500 rounded-lg mb-20  transition-transform hover:scale-95"
            onClick={handleClick}>SEE RESTAURANTS NEAR YOU</button>
        </div>
    </div>
}
export default EmptyCart;