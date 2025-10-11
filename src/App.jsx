import {  useEffect, useState } from "react"
import './css/reset.css'
import Desserts from './components/Desserts'
import Cart from './components/Cart'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [desserts, setDesserts] = useState([]);

  async function fetchDesserts() {
    setIsLoading(true);
    const response = await fetch('/data.json');
    const data = await response.json();

    setDesserts(data);
    setIsLoading(false);
  }


  useEffect(() => {
    fetchDesserts();
  }, []);


  return (
    <div className='App'  >
      <Desserts desserts={desserts} />
      <Cart />
    </div>
  )
}

export default App
