
import ResCategoryBody from "./ResCategoryBody" ; 
import {useState } from "react"  ;
const ResCategory = ({data , num, index, setIndex , pos })=>{

    // const [ show , setShow] = useState(false) ; 
        // console.log( data , "the exact nutrient " ) ; 
        // console.log( key  ) ; 
        // console.log(Object.keys(data[0]))
        const gotClicked = ()=>{
            // console.log( " got clicked ") ; 
            // setShow(!show) ;
            const val =  pos === index ? -1 : pos ; 
            setIndex(val) ;  
        } 
    return(
        <div>
            {/* Accordian Header 

                Accordian Body 
             */}
             {/* Here I will have the header ⨇ */}
             <div className="w-[50%] mx-auto bg-gray-50 shadow-lg p-4 my-2 ">
                <div className="flex justify-between cursor-pointer"
                  onClick={()=>gotClicked()}>
                    <span className="font-bold text-lg">{Object.keys(data[0])} ({num})</span>
                    <span >⨈</span>
                </div>
                {
                   (index === pos ) && Array(num+1).fill(1).map( (ele,ind) => <ResCategoryBody key={ind} info={data} />) 
                }
                
                </div>
             

             {/* This is basically ans ACCORDION URF RESCATEGORY  */}
        </div>
    )
 } ; 

export default ResCategory ; 