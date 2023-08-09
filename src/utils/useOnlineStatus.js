import { useState, useEffect  } from "react" ; 
const useOnlineStatus = ()=>{
    // checs if the user is online or not 
    const [ online , setOnline  ] = useState( true ) ; 

    useEffect(()=>{
        // THE EVENT LISTENER HERE WILL HELP ME TO RUN THE FUNCTION ONLY ONCE 
        //  AND AFTER THE FUNCTION  IS UP AND UNNING I CAN EASIY MANNAGE UP THE THINGS 

        window.addEventListener("online" , ()=>{
            setOnline( true ) ; 
        });
        window.addEventListener("offline" , ()=>{
            setOnline( false ) ;
        })
    } , []  ) ; 
    return online ;
    // return true ;  

}

export default useOnlineStatus ; 