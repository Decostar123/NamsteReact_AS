import { styleCard } from "../utils/constant";
import {Link} from "react-router-dom"
const RCard = (resp) =>{
    const {name,  family,order,genus , id   } = resp.data ; 
    // console.log("pp is" , resp.pp ) ; 
    const path = "http://localhost:1234/restaurant/"+id ;
    return (

     <Link to={path}   >  
       <div className="m-4 p-4 w-[250px] h-[300px] rounded-md hover:bg-gray-200  hover:scale-105"   >
        
            <img className="rounded-lg pb-3" src="https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp" />
            <h3 className="font-bold  py-1 text-lg  mb-3">{name}</h3>
            <h4 className="py-1">{family}</h4>
            <h4 className="py-1">{order}</h4>
            <h4 className="py-1">{genus}</h4>
      </div>
    </Link>

)
   
}

export const withLabel = ( RCard) =>{
  // 
  return (resp)=>{
    // console.log( resp ) ; 
    return (<div>
      <label className="absolute bg-black text-white z-10 m-2 p-2 rounded-lg">Promoted</label>
      <RCard data={...resp.data }/>
    </div>)
  }
}
export default RCard ; 