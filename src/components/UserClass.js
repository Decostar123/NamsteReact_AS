import React from "react" ; 

class UserClass extends React.Component{

    constructor(props){
        super(props) ; 
        this.state = {
            userInfo :{
                name :"XYZ" , 
                location :"XYZ" 
            }
        }
        console.log( props ) ; 
        console.log("child class constructor ")
    }

    async componentDidMount(){
        // console.log(" chiild component Munted ") ; 
        const data = await fetch("https://api.github.com/users/Decostar123") ; 
        const json = await data.json() ; 
        console.log( json ) ;       
        this.setState({
            userInfo : json 
        })                    
    }
    render(){
        console.log( " child class body/render ") ;
        return (

            <div className="user-card">
            {/* <h1>count is, {this.state.count}</h1>
            <h1>count2 is, {this.state.count2}</h1> */}
            <h2>Name:  {this.state.userInfo.login} </h2>
            <h3>Locaton: {this.state.userInfo.type}</h3>
            <h4>Contact: @AkshaySAINI</h4>
            <img src={this.state.userInfo.avatar_url} />
            <br></br>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1  
                }) ; 
                this.setState({
                    count2 : this.state.count2 + 1  
                })

            }}>Count_INCREASE</button>
            <button onClick={()=>{
                this.setState({
                    count2 : this.state.count2 + 1  
                })
                
            }}>Count@_INCREASE</button>

            </div>
        )
    }
}

export default UserClass ; 