import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent"
// import RestaurantCardComponent from "./components/RestaurantCardComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import {Cart} from "./components/Cart";
import { Error } from "./components/Error";
import { Login } from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - restaurant container
 *    - restaurant cards
 *      - img
 *      - Name of Res, Star Rating, cuisine, delivery time, price. 
 * 
 * Footer
 * - copyright
 * - links
 * - social media
 * 
 */


const AppLayout = ()=>{
    return <div className="app">
                <HeaderComponent />
                <Outlet />
                {/* this Outlet component is used as a component according to the route it to be given. 
                    The Route should be given by the router as a children which being filled according to route.*/}
            </div>
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <BodyComponent />
            }
            ,
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement: <Error/>
    },
    {
        path:"/login",
        element:<Login />
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)