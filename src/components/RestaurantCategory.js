import { useState } from "react";
import ItemList from "./ItemList";

const ResstaurantCategory = (props)=>{
    const [showItems,setShowItems] = useState(false);

    const handleClick = ()=>{
        setShowItems(!showItems);
    }
    
    return (
        <div >
            <div className="w-8/12 m-auto bg-slate-100 shadow-lg my-6 p-4 ">
                <div className="flex  justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{props?.data?.title} ({props?.data?.title?.length})</span>
                <span>🔽</span>
                </div>
                <div className="flex justify-center">
                {showItems && <ItemList data={props?.data?.itemCards}/>}
                </div>
            </div>
                
        </div>
    )

}

export default ResstaurantCategory;