import { useState, useEffect } from "react";
import exampleImage  from "../img/Logo.png";
import { Link } from "react-router-dom";

const HeaderComponent = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    console.log("header rendered");

    // if there is no dependency array => the use effect render on every component render
    // if there is empty dependency array => the use effect render only once at initial after that it will not be rendered
    // if there is an dependency array => the use effect render on avery change or update of dependency
    useEffect(()=>{
        console.log("useEffect");
    },[btnName]);

    return ( <div className="header">
                <div className="logo-container">
                    <img className="logo" src={exampleImage} alt="Logo"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/about">About Us</Link></li>
                        <li><Link className="link" to="contact">Contact Us</Link></li>
                        <li><Link className="link" to="/cart">Cart</Link></li>
                        <button className="btn-Name" onClick={()=>{
                                if(btnName==="LogIn"){
                                    
                                    setBtnName("LogOut");
                                }else{ 
                                    setBtnName("LogIn")
                                }
                            }
                        }><Link className="link" to="/login">{btnName}</Link></button>
                    </ul>

                </div>

        </div>
        )
}

export default HeaderComponent;