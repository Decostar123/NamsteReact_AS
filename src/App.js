import React  , {lazy , Suspense , useState} from "react" ; 
import ReactDOM from "react-dom" ; 
// Component is a normal Javascript function returning JSX cod ar react componenet element 
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
// The R is capital as it is goes inside the root.render as a component part 
import About from "./components/About.js" ; 
import Error from "./components/Error.js" ;
import Contact from "./components/Contact.js" ; 
import ResMenu from "./components/ResMenu.js" ;
import Cart from "./components/Cart.js"
import { Provider } from "react-redux";
// import useOnlineStatus from "./utils/useOnlineStatus";
// import Grocery from "./components/Grocery.js" ; 
import React from "react"  ;
const Grocery = lazy(()=> import("./components/Grocery") ) 
import ContextInfo from "./utils/ContextInfo" ; 
import appStore from "./utils/appStore";

// const age = 25 ; 
const AppLayout = ()=>{
   const [ state , setState ] = useState(false ) ; 
    return (

        <Provider store={appStore}>
            <ContextInfo.Provider value={{naam:"Deco" }} >
            <div >
                <Header />
                {/* <Body />  */}
                <Outlet />
            </div>
            </ContextInfo.Provider>
        </Provider>
        
    )
}
//  IF I WANT SMALL PART OF APPLICATION TO HAVE THE STORE IN THAT CASE WRAP ONLY 
//  THAT PAET INSIDE THE STORE 
const appRoute = createBrowserRouter( [
    {
    path :"/" , 
    element : <AppLayout/>, 
    errorElement: <Error/> , 
    children : [
        {
            path:"/" , 
            element :<Body/>
        } , 
        {
            path:"/about" , 
            element : <About />
        } , {
            path : "/contact" , 
            element : <Contact />
        } , {
            // this is basically the normal URL which will be given by me, 
            // here 
            path :"/restaurant/:resId", 
            element : <ResMenu /> 
        }  , {
            path :"/grocery"  , 
            element :<Suspense fallback={<h1>LoADING MAN....</h1>}><Grocery/> </Suspense>
            // element :<Grocery />
        } , {
            path:"/cart" , 
            element : <Cart /> 
        }
    ]
   }  , 
   
] )  

const root  = ReactDOM.createRoot(document.getElementById("root") ) ; 
// const head = (
//     <h1> Trying to render a jsx code </h1>
// )
// root.render(head ) ;  
root.render( <RouterProvider router={appRoute} />   )  ; 
