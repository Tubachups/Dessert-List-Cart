import { useState, useEffect } from 'react'

const Card = ({ dessert, updateCart, resetTrigger }) => {
  const { image, category, name, price } = dessert
  const [isSelectImg, setIsSelectImg] = useState(false)
  const [isAddCart, setIsAddCart] = useState(false)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    if (resetTrigger > 0) {
      setIsAddCart(false)
      setIsSelectImg(false)
      setQuantity(0)
    }
  }, [resetTrigger])


  const changeAddCart = () => {
    setIsAddCart(true)
    setQuantity(1)
    updateCart(dessert, 1)
    setIsSelectImg(true)
  }

  const changeQty = (sign) => {
    let newQty = quantity;

    if (sign === '+') {
      newQty = quantity + 1;
      setQuantity(newQty);
    } else if (sign === '-' && quantity > 1) {
      newQty = quantity - 1;
      setQuantity(newQty);
    } else if (sign === '-' && quantity === 1) {
      setIsAddCart(false);
      setIsSelectImg(false)
      newQty = 0;
      setQuantity(0);
    }
    updateCart(dessert, newQty);
  }

  return (
    <div className='Card mb-3 '>
      <div className="relative mb-6">
        <img src={image['mobile']} alt={name} className={`rounded-xl w-full ${isSelectImg ? 'border-[#c73b0f] border-3' : 'border-3 border-transparent' } `} />
        <div className='flex absolute -bottom-5 left-1/2 -translate-x-1/2 w-40'>
          {
            isAddCart ?
              (
                <div className='flex  p-2 px-3  rounded-full  bg-[#c73a0f] justify-between gap-12 text-white border-[#c73a0f] border'>
                  <button onClick={() => changeQty('-')} className='cursor-pointer '><i className="fa-solid fa-square-minus "></i></button>
                  <p>{quantity}</p>
                  <button onClick={() => changeQty('+')} className='cursor-pointer'><i className="fa-solid fa-square-plus "></i></button>
                </div>
              ) :
              (
                <button onClick={changeAddCart} className='border-[#A28C86] border p-2 px-6 rounded-full  bg-white cursor-pointer text-[#260f08] font-medium ' >
                  <i className='fa-solid fa-cart-plus pr-1'></i>Add to Cart</button>
              )
          }
        </div>
      </div>

      <div>

        <small className='text-[#c9b2a9]'>{category}</small>
        <p className='text-[#260f08] font-semibold'>{name}</p>
        <p className='text-[#c73b0f] font-semibold'>${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
export default Card