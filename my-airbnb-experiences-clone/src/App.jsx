import NavigationBar from "./NavigationBar.jsx"
import data from "./data.js"
import Hero from "./Hero.jsx"
import Card from "./Card.jsx"


function App() {
const cards = data.map(item =>{
  return (
      <Card
      
       img={item.coverImg}
       ratingImg = {item.reviewImg}
       rating = {item.stats.rating}
       reviewCount = {item.stats.reviewCount}
       location = {item.location}
       title = {item.title}
       price = {item.price}

      />
  )
})
  

  return (
    <>
      <NavigationBar/>
      <Hero/>
      <div className="card-container">
                {cards}
            </div>
      
    </>
  )
}

export default App
