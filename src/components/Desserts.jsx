import Card from './Card'

const Desserts = ({ desserts, updateCart, resetTrigger}) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 xl:gap-5 flex-2 ">

      {desserts.map(dessert => (
        <Card 
          key={dessert.id}
          dessert={dessert}
          updateCart={updateCart}
          resetTrigger={resetTrigger}
        />
      ))}
    </div>
  )
}

export default Desserts
