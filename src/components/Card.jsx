import '../css/Card.css'

const Card = ({image, category, name, price}) => {

  return (
    <div className='Card'>
      <img src={image['mobile']} alt={name} />
      <button> <i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
      <div>
        
        <small>{category}</small>
        <p>{name}</p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
export default Card