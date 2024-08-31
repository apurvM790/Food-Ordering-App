import { useDispatch } from "react-redux";
import { addUser } from "../utils/cartSlice";

const ItemList = (props)=>{
    const menuImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

    const dispatch=  useDispatch();

    return (
            <div className="">
            {props.data.map((e)=>(
                    <div key={e.card.info.id} className="w-[950px] flex  border-4 py-2 my-4 px-2 justify-between items-center hover:bg-slate-300 ">
                        <div className="details">
                        <div className="font-semibold text-lg my-1 ">
                            <h2>{e.card.info.name}</h2>
                        </div>
                        <div className="dish-cost my-1">
                            <h2>💸{e.card.info.price/100 || e.card.info.defaultPrice/100}</h2>
                        </div>
                        <div className="dish-rating my-1">
                            <h4>⭐{e.card.info.ratings.aggregatedRating.rating} ({e.card.info.ratings.aggregatedRating.ratingCount })</h4>
                        </div>
                        <div className="my-1 font-light w-[700px]">
                            <p className="">{e.card.info.description}</p>
                        </div>
                        </div>
                        <div className="">
                            <button className="absolute  p-3 rounded-lg shadow-xl bg-white text-green-400 transition-all hover:scale-95 hover:bg-blue-200 hover:text-green-900" onClick={()=>{
                                dispatch(addUser(e));
                            }}>Add +</button>
                            
                            <img className=" w-[150px] h-[150px] rounded-2xl  transition-all hover:scale-95" src={menuImg + e.card.info.imageId}/>
                        </div>
                        
                    </div>
            ))}
            </div>
    )
}

export default ItemList;