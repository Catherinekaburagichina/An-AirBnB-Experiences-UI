import logo from "./assets/airbnb photo grid.png"

export default function Hero(){
    return(
        <section className="hero-section">

        <img src={logo} className="airbnb-photo-gallery" ></img>

        <h1 className="airbnb-header">Online Experiences</h1>
        <p className="airbnb-text">Join Unique interactive activities led by one-of-a-kind host-all without leaving home.</p>     
       
        </section>
        
    )
   
}
