import emptyCartImage from '../assets/images/illustration-empty-cart.svg';

const Cart = ({ cartItems  }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="Cart bg-white p-4 rounded-xl">
      <h2 className="text-[#c73b0f] font-bold text-2xl mb-5">Your Cart <span>({totalItems})</span></h2>
      <div>
        {
          cartItems.length !== 0 ? 
          (
            cartItems.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <div>
                  <p>{item.quantity}x</p>
                  <p>@ ${item.price.toFixed(2)}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <div className=''>
              <img src={emptyCartImage} alt="" className='mx-auto' />
              <p className="text-[#745c55] font-semibold">Your added items will appear here</p>
            </div>
          )
        }
        
        {cartItems.length > 0 && (
          <div>
            <p>Order Total</p>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart