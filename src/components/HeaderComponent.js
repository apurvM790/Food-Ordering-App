import { useState, useEffect, useContext } from "react";
import exampleImage  from "../img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../UserContext";

const HeaderComponent = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    // console.log("header rendered");

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    // if there is no dependency array => the use effect render on every component render
    // if there is empty dependency array => the use effect render only once at initial after that it will not be rendered
    // if there is an dependency array => the use effect render on avery change or update of dependency
    useEffect(()=>{
        console.log("useEffect");
    },[btnName]);

    const onlineStatus = useOnlineStatus();
    

    return ( <div className=" flex justify-between bg-lime-200 shadow-xl rounded-lg shadow-slate-400">
                <div className="w-28  ">
                    <img className="transform transition-all hover:scale-90 rounded-2xl shadow-lg bg-red-400" src={exampleImage} alt="Logo"/>
                </div>
                <div className=" flex  items-center ">
                    <ul className="flex ">
                        <li className="px-3 font-semibold ">Online Status: {onlineStatus ? "🟢" : "🔴"  } </li>
                        <li className="px-3 font-semibold"><Link className="link" to="/">Home</Link></li>
                        <li className="px-3 font-semibold"><Link className="link" to="/about">About Us</Link></li>
                        <li className="px-3 font-semibold"><Link className="link" to="contact">Contact Us</Link></li>
                        <li className="px-3 font-semibold"><Link className="link" to="/cart">Cart</Link></li>
                        <li className="px-3 font-semibold"><Link to="/Grocery">Grocery</Link></li>
                        <li className="px-3 font-semibold transform transition-all hover:scale-125  "><button className="text-white border px-1 shadow-xlg bg-pink-300 rounded-lg hover:text-cyan-600 " onClick={()=>{
                                if(btnName==="LogIn"){
                                    
                                    setBtnName("LogOut");
                                }else{ 
                                    setBtnName("LogIn")
                                }
                            }
                        }><Link className="link" to="/login">{btnName}</Link></button></li>
                        <li>
                            <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-400 rounded-full transition-all hover:scale-90 cursor-pointer dark:bg-gray-400">
                                <span class="font-medium text-white dark:text-gray-100">{loggedInUser}</span>
                            </div>

                        </li>
                    </ul>

                </div>

        </div>
        )
}

export default HeaderComponent;