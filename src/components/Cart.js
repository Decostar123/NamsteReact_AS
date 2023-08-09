import { Provider , useSelector , useDispatch } from "react-redux";
import {clear} from "../utils/cartSlice" ; 
const Cart = () =>{
    const dispatch = useDispatch() ; 
    const cartItems = useSelector( (store) => store.cart.items )
    console.log( cartItems )

    
    return (
        <div>
        <div className="flex justify-center">
            <button  onClick={()=> dispatch(clear())}className="h-10 w-30 p-2 rounded-md bg-gray-300 text-lg text-black">Clear Cart </button>
        </div>
          
            <div>
            {
                cartItems.map( (ele, ind )  => 
              (
                <div key={ind} className="w-[50%] mx-auto bg-gray-50 shadow-lg p-4 my-2 flex justify-between " >
            <div className="hover:scale-95 ease-in-out duration-500 flex justify-between border-b-4 border-gray mb-2"   >
        
            <div  className=" w-9/12 text-start  ">
              <h1 className="py-2">{Object.keys(ele)[0].toUpperCase()}</h1>
             <p>The amount of required ingredient in this is {ele[Object.keys(ele)[0]]}</p>
            </div>
            <div className="w-3/12" >

            <img src={"https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="} />
            </div>
                 </div>

                 </div>
                 ) 
        
            )
            }
           </div>
       
        </div>
    )
}
export default Cart ;   