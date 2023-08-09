const Shimmer = ()=>{
        return ( <div className="shimmer-container">
           {
            Array(15).fill(1).map( (el, ind ) => (<div key={ind} className="shimmer-card"></div>) )
           }
    
        </div>)
}

export default Shimmer ; 
// implci default 