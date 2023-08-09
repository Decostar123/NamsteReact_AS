import {useEffect , useState } from "react" ;
import {useParams } from "react-router-dom" ; 
import useResMenu from "../utils/useResMenu" ; 
import  Shimmer  from "./Shimmer" ;  
import ResCategory from "./ResCategory" ;
// import {useState } from "react"  ;
 
// Note the ResMenu and the ResCard are totally different things  or the entitites 
//  ResMenu is based on the dynamic url concept 
// ResCard is shoing each data and the Link to concept 
const ResMenu = () =>{
    // const [ show , setShow] = useState(false) ; 
    // const [ info , setInfo   ] = useState(null) ; 
    const [index, setIndex] = useState(0) ; 
    const {resId } = useParams() ; 
    // useEffect(   ()=>{
    //     fetchData() ; 
    //     useResMenu( resId ) ; 
    //     // the fetchData is asunchronous , I can ot make the outer one as asynchronous 
    //     // .as the reason is react just wants a siplecallback function to execute 
    // } , [] ) ; 
    // const fetchData = async () =>{
    //     const data = await fetch("https://www.fruityvice.com/api/fruit/all") ; 
    //     console.log( typeof data ) ; 
    //     const res = await data.json() ; 
    //     // console.group( res )  ; 
    //     // console.log( "resId---" , typeof resId  ) ; 
    //     const entry = res.filter( item => {
    //         // console.log( "resId---" , resId ) ;
    //         return item.id === Number(resId) ; 
    //     } ) ; 
    //     setInfo( entry[0] ) ; 
    //     console.log( entry ) ;
    //     console.log( "resId" , resId ) ;  
    // }
    const info = useResMenu( resId ) ;
    // THE ABOVE THIN IS BASUCALLY GETTING THE INFORMATIN WITH THE HELP OD THE ID FUNCTION  
    // THIS INFO IS ACTUALLY THE USESTATE PARAMETER , 
    //  it is a state variable which basically can be tracked for the changes  
    if( info  === null ) return <Shimmer /> ; 
    if( info === undefined  ) return <h1>OOPS! No data found </h1> 
    // NOTE THE info IS NOT A NORMAL VARIBLE BUT IT IS A STATE VARIBLE 

    return (
        
         <div className="text-center">
         <h1 className="font-bold my-6 text-2xl">{info.name} </h1>
         {/* <h2>{info.family}</h2> */}
         {/* <ul>
            <li>{info.genus}</li>
            <li>{info.order}</li> */}
            {/* <li>{info.nutritions}</li> */}
            {/* <li key={ind} >{ele},{info.nutritions[ele]}</li> */}
            {
                Object.keys(info.nutritions).map( (ele , ind ) =>{
                    return (                    
                        <ResCategory index={index} setIndex={setIndex} num={ind} key={ind} pos={ind} data={[{[ele] : info.nutritions[ele]}]} />
                    )
                })
            }
           
         {/* </ul> */}

         </div>
    )
}
export default ResMenu ; 