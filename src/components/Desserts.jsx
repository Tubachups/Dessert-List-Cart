import '../css/Desserts.css'
import Card from './Card'

const Desserts = ({ desserts }) => {
  return (
    <div className="Desserts">
      <h1>Desserts</h1>

      {
        desserts.map(dessert => (
          <Card key={dessert.id} name={dessert.name} category={dessert.category} price={dessert.price} image={dessert.image} />
        ))
      }
      
    </div>
  )
}
export default Desserts