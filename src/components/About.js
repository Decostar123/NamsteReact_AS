import UserClass from "./UserClass";
import React from "react" ; 
class About extends React.Component{
    constructor(props){
        super(props )  ;
        console.log( " parent class contrutor ") ; 
    }
    render(){
        console.log("parent class render method" ) ; 
        return (
            <div>
                <h1>Hey</h1>
                <h2>This is aboute class Component</h2>
                <UserClass name="DecoKStar" />
            </div>
        )
    }
}
// const About = ()=>(
//     <div>
//     <h1>Hey</h1>
//     <h2>This is aboute section </h2>
//     <UserClass/>


//     </div>
// )
export default About ; 