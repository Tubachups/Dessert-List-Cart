import Card from './Card'

const Desserts = ({ desserts, updateCart}) => {


  return (
    <div className="Desserts">
      <h1 className='text-3xl font-bold mb-5'>Desserts</h1>

      {desserts.map(dessert => (
        <Card 
          key={dessert.id}
          dessert={dessert}
          updateCart={updateCart}
        />
      ))}
    </div>
  )
}

export default Desserts
