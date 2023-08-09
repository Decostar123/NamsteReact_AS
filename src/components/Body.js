import RCard , {withLabel} from "./RCard"
import Shimmer from "./Shimmer" ; 
import { useState , useEffect } from "react" ; 
import useOnlineSatus from "../utils/useOnlineStatus" ;
const Body = () =>{

    
    let Res = [] ; 
    const [ res , setRes ] = useState(null ) ; 
    const [text, setText ] = useState("") ;
    const [ cres , csetRes ] = useState([]) ;  
    // const time2 = setInterval( ()=>{
    //     console.log( " It is set Interval, outside useEffect   ")  ;
    // }, 1000 ) ;  

    // let check = false ; 
    const online  = useOnlineSatus() ; 
    if( online === false ) {
        console.log(" Your internet is not working ")
        return (<div>
            <h2>LOOKSLIKE YOU ARE OFFLINE </h2>
            <h2>CHECK YOUR INTERNET CONNECTION </h2>
        </div>)
    }
   

    useEffect(()=>{
        // console.log( "useEffect called ") 
        console.log( " THe component is Rendered again ") ;
        fetchData() ; 
        // const time = setInterval( ()=>{
        //     console.log( " It is set Interval ")  ;
        // }, 1000 ) ; 

        // return ()=>{ 
        //     clearInterval(time2 )            
        //     console.log( " Clearing the mess ")}

    },[]) ; 
   
    const fetchData = async () =>{

        const data = await fetch("https://www.fruityvice.com/api/fruit/all")  ;
        const arr = await data.json() ; 
        console.log( arr) ; 
        setRes( arr ) ; 
        csetRes( arr ) ; 
        //  This copy is intact and is just used to do the required search 

        // Res = new Array(arr) ;
        // console.log( Res );  
        // check = true ; 
        
    }


    
    // if( !check ) return ( <h2>Chec kis not Checked </h2>)
    if( res === null  ) return (
        <div style={{display:"flex" , flexDirection:"column"}}>
            
                <div className="search" >
                <input type="text" className="search-box" placeholder="Search your fruit..."
                    value={text} onChange={ e=> setText(e.target.value)}
                />
                {/* 
                    If i wanted to make he code modular, then actually I  need to pass 
                    the text and setText parameters as well here as they are actually getting
                    changed...
                    AND I THINKS THIS IS THE PROBLEM OF PROP DRILLING 
                          
                 */}
                <button className="filter" onClick={()=> { 
                    // setRes( Res) ; 
                    // console.log( "Res ") ; 
                    // console.log( Res ) ;
                    const tt =  cres.filter( ele => ele.name.toLowerCase().includes(text.toLowerCase())) ; 
                    setRes(tt ) ; 
                    
                }} >
                    Search
                </button> 
            </div>
            <div>
            <Shimmer />
            </div>

        
               
                
        </div>
     ) 
//    HERE COMES THE PROMOTED COMPONENET 
            const PromotedRCard = withLabel(RCard) ; 
            
        return (
            <div>
            <div className="mx-4 px-4 flex justify-center items-center " >
                <input  className="h-8" type="text"  placeholder="Search your fruit..."
                    value={text} onChange={ e=> {
                        setText(e.target.value) ;
                        console.log( " the e")
                        // setRes( ()=> cres.filter( ele => ele.name.toLowerCase().includes(text.toLowerCase())) )
                    const tt =  cres.filter( ele => ele.name.toLowerCase().includes(text.toLowerCase())) ; 
                    setRes(tt ) ;  

                    }}
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=> { 
                    // setRes( Res) ; 
                    // console.log( "Res ") ; 
                    // console.log( Res ) ; 
                    const tt =  cres.filter( ele => ele.name.toLowerCase().includes(text.toLowerCase())) ; 
                    setRes(tt ) ; 
                    // setRes( ()=> cres.filter( ele => ele.name.toLowerCase().includes(text.toLowerCase())) )
                    
                }} >
                    Search
                </button> 
            </div>
            <div className="flex flex-wrap" >
               {
                
                res.map((ele, ind) => {

                    const num = ele.id  ;
                    {/* console.log( num , (num%2)) */}
                    {/* console.log( typeof num ) */}
                    return num%2 === 0 ? (<PromotedRCard data={ele} key={ele.id} />) : (<RCard data={ele} key={ele.id} /> )  
                    
                } ) 
               }
                
            </div>
    
        </div>
        )


   
}
    
   


export default Body ; 