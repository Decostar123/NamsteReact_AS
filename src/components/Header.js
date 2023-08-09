import {LOGO_URL} from "../utils/constant" ; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus" ; 
import ContextInfo from "../utils/ContextInfo" ;
import { createContext, useContext } from "react"; 
import {useSelector} from "react-redux" ; 
const Header= () =>{
    // console.log( LOGO_URL ) ; 
    // const context = ContextInfo() ; 
    const cartItem = useSelector((state)=> state.cart.items ) ; 
    console.log( "the cartItem"  , cartItem ) ; 
    const context = useContext(ContextInfo ) ; 
    console.log("data was "  ,  context  ) ; 

    // console.log( "context data " , data  ) ; 
    // console.log(  "the creatd context ", ContextInfo)
    const online = useOnlineStatus() ; 
    let btnName = "Login" ;
    return (
        <div className="flex justify-between shadow-xl mb-4 ">
            <div  className="w-56">
                <img src={LOGO_URL}  />

            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" >
                    <li className="px-4" >Hi, {context.user}</li>
                    <li className="px-4">OnlineSatus{online? '✔': '❌' }</li>
                    <li className="px-4"> <Link to="/">Home</Link></li> 
                    <li className="px-4"><Link to="/about">About Us</Link></li> 
                    <li className="px-4"><Link to="/contact" >Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery ">Grocery</Link></li>
                    <li className="px-4"><Link to="/grocery ">Grocery</Link></li>
                    <li className="px-4 font-extrabold"><Link to="/cart">Cart, {cartItem.length}</Link></li>

                    
                    {/* <li>Home</li>
                   <li>About Us</li> 
                    <li>Contact Us</li> */}
                    <button onClick={()=>{btnName="LogOut"}} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header ; 