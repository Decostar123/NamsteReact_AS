import { CONTENT_URL } from "./constant";
import {useEffect , useState } from "react" ; 
const useResMenu = (resId)=>{
    // fretch the data only once
    //  AL THE LOGOC OF GETTING DATA, FROM OUR MAIN COMPONENT CAME HERE 
    console.log("the resId received was " , resId  ) ; 
    const [info, setInfo] = useState(null) ; 

    useEffect( ()=>{
        fetchData()
    } , []  ) ; 

    const fetchData = async () =>{
        const data = await fetch(CONTENT_URL ) ; 
        const json = await data.json() ;   
        const filter = json.filter( ele =>  ele.id === Number(resId) ) ; 
        console.log( filter ) ; 
        setInfo( filter[0] ) ;       
    }


    return info  ; 
}
export default useResMenu ; 