import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { removeUser } from "../utils/cartSlice";


export const Cart = ()=>{
    const itemsList = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    console.log(itemsList);
    const menuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";
    return !itemsList.length?<EmptyCart />:(<div className="w-7/12 left-0 right-0 mx-auto ">
        <div className="font-bold text-5xl text-purple-400 border-4 rounded-md shadow-xl py-3 my-2 px-3">Cart Items...</div>
        {itemsList.map((e)=>(
                    <div key={e.card.info.id} className="w-[950px] flex  border-4 py-2 my-4 px-2 justify-between items-center hover:bg-slate-300 ">
                        <div className="details">
                        <div className="font-semibold text-lg my-1 ">
                            <h2>{e.card.info.name}</h2> 
                        </div>
                        <div className="dish-cost my-1">
                            <h2>💸{e.card.info.price/100 || e.card.info.defaultPrice/100}</h2>
                        </div>
                        </div>
                        <div className="">
                            <button className="absolute  p-3 rounded-lg shadow-xl bg-white text-red-400 transition-all hover:scale-95 hover:bg-red-200 hover:text-green-900" onClick={()=>{
                                dispatch(removeUser(e.card.info.id));
                            }}>Remove - </button>
                            
                            <img className=" w-[150px] h-[150px] rounded-2xl  transition-all hover:scale-95" src={menuImg + e.card.info.imageId}/>
                        </div>
                        
                    </div>
            ))}

    </div>)
}