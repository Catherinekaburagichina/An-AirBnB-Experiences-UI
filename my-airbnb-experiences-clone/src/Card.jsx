

export default function Card(props){
    
    
    return(
   <div className="card-container">

    <div className="card">
    
    <img src = {`/assets/${props.img}`}  className="card-image" />
 
 
    <div className="card-rating">
 
    <img src = "./assets/Rating Star.png"  className="card-star-image" />
 
    <span >{props.rating}</span>
 
    <span className="gray">({props.reviewCount})  • </span>
    <span className="gray">{props.location}</span>
 
    </div>
    
    <h5>{props.title}</h5>
    <p><span className="bold">From ${props.price}</span> / person </p>
 
     </div>

  </div>
  


   

 
    )
}