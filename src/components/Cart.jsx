import emptyCartImage from '../../public/images/illustration-empty-cart.svg';
import treeImage from '../../public/images/icon-carbon-neutral.svg';
import checkImage from '../../public/images/icon-order-confirmed.svg'


const Cart = ({ cartItems, setCartItems, triggerReset }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const showModal = () => {
    document.getElementById('my_modal_1').showModal();
  }

  const resetOrder = () => {
    setCartItems([])
    triggerReset()

    setTimeout(() => {
      document.getElementById('my_modal_1').close()
    }, 500);
  }

  return (
    <div className="Cart bg-white p-4 rounded-xl xl:-mt-12 xl:mb-50 ">
      <h2 className="text-[#c73b0f] font-bold text-2xl mb-5 ">Your Cart <span>({totalItems})</span></h2>
      <div>
        {
          cartItems.length !== 0 ?
            (
              cartItems.map((item) => (
                <div key={item.id} className='mb-3'>
                  <p className='text-[#260f08] font-semibold'>{item.name}</p>
                  <div className='flex gap-2'>
                    <p className='text-[#c73b0f] font-semibold'>{item.quantity}x</p>
                    <p className='text-[#a28c86]'>@ ${item.price.toFixed(2)}</p>
                    <p className='text-[#745c55] font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <hr className='text-[#f4edea] mt-2' />
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
          <div className='flex justify-between items-center'>
            <p className='text-[#260f08]'>Order Total</p>
            <h3 className='font-bold text-2xl text-[#260f08]'>${totalPrice.toFixed(2)}</h3>
          </div>
        )}

      </div>

      <div className='flex justify-center gap-2 bg-[#fcf9f7] p-3 rounded-md my-4'>
        <img src={treeImage} alt="" />
        <small className=' text-[#745c55]'>This is a <span className='font-semibold text-[#260f08]'>carbon-neutral</span> delivery</small>
      </div>
      <button className={`cursor-pointer bg-[#c73b0f] text-white rounded-full py-2 w-full ${cartItems.length == 0 && `hidden`}`} onClick={showModal}  >Confirm Order</button>

      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <img src={checkImage} alt="" />
          <h1 className="font-bold text-3xl text-[#260f08]">Order Confirmed!</h1>
          <p className='text-[#a28c86]'>We hope you enjoy your food</p>
          <div className='bg-[#fcf9f7] p-4 rounded-md my-4 max-h-60 overflow-y-auto'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex items-center gap-3 mb-3'>
                <img src={item.image.thumbnail} alt={item.name} className='w-12 h-12 rounded' />
                <div className='flex-1'>
                  <p className='text-[#260f08] font-semibold'>{item.name}</p>
                  <div className='flex gap-2'>
                    <p className='text-[#c73b0f] font-semibold'>{item.quantity}x</p>
                    <p className='text-[#a28c86]'>@ ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className='text-[#260f08] font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className='flex justify-between items-center mt-4 pt-3 border-t'>
              <p className='text-[#745c55]'>Order Total</p>
              <h3 className='font-bold text-2xl text-[#260f08]'>${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
          <button className="cursor-pointer bg-[#c73b0f] mx-auto w-full rounded-full py-2" onClick={resetOrder}>Start New Order</button>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>

  )
}

export default Cart