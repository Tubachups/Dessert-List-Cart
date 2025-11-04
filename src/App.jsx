import { useEffect, useState } from "react"
import Desserts from './components/Desserts'
import Cart from './components/Cart'
import { useCartState } from "./hooks/useCartState";

function App() {
  const [desserts, setDesserts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [resetTrigger, triggerReset] = useCartState()

  async function fetchDesserts() {
    const response = await fetch('/data.json');
    const data = await response.json();

    setDesserts(data);
  }

  const updateCart = (dessert, quantity) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== dessert.id));
    } else {
      setCartItems((cartItems) => {
        const existingItem = cartItems.find(item => item.id === dessert.id);
        if (existingItem) {
          return cartItems.map(item =>
            item.id === dessert.id ? { ...item, quantity } : item
          );
        } else {
          return [...cartItems, { ...dessert, quantity }];
        }
      });
    }
  };

  useEffect(() => {
    fetchDesserts();
  }, []);

  return (
    <div className='App p-4 lg:p-16 bg-[#fcf9f7] font-display'>
      <h1 className='text-3xl font-bold mb-5'>Desserts</h1>
        <div className="flex flex-col xl:flex-row gap-5">
          <Desserts desserts={desserts} updateCart={updateCart}  resetTrigger={resetTrigger}/>
          <Cart cartItems={cartItems} setCartItems={setCartItems}  triggerReset={triggerReset} />
        </div>

    </div>
  )
}

export default App
