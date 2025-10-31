import { useEffect, useState } from "react"
import Desserts from './components/Desserts'
import Cart from './components/Cart'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [desserts, setDesserts] = useState([]);
  const [cartItems, setCartItems] = useState([])


  async function fetchDesserts() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await fetch('/data.json');
    const data = await response.json();

    setDesserts(data);
    setIsLoading(false);
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
    <div className='App p-4 bg-[#fcf9f7] font-display'>
      {
        isLoading ? <div>Loading</div> : <Desserts desserts={desserts} updateCart={updateCart} />
      }
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
