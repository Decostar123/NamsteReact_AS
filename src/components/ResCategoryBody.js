// import {LOGO_URL} from "../utils/constant.js"
import { useDispatch } from "react-redux";
import {add} from "../utils/cartSlice"
const ResCategoryBody = ({info})=>{ 
    // console.log(  info, " inside the body   "  ) ; 
    // {
    //    <div>Yeah bou </div>
    // }
    const dispatch = useDispatch() ; 
    const handleClick = ()=>{
        dispatch(add(info[0])) ; 
        // console.log( add) ; 
    }
    return (<div className=" hover:scale-95 ease-in-out duration-500 flex justify-between border-b-4 border-gray mb-2"   >
        
        <div  className=" w-9/12 text-start  ">
            <h1 className="py-2">{Object.keys(info[0])[0].toUpperCase()}</h1>
            <p>The amount of required ingredient in this is {info[0][ 
                Object.keys(info[0])[0]
            ]}</p>
        </div>
        <div className="w-3/12" >
                 <div onClick={ handleClick }className="text-lg bg-black text-white w-fit px-2 py-1 cursor-pointer relative top-8 ">
                     Add +
                </div>
            <img src={"https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="} />
        </div>
    </div>)
}
export default ResCategoryBody ; 