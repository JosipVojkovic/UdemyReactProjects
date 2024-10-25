import { useEffect, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./components/store/CartContext";
import UseReducerComponent from "./components/UseReducerComponent";

function App() {

  const [meals, setMeals] = useState([])
  const [cart, setCart] = useState(0)

  function handleAddToCart(event){
    setCart(prevState => prevState + 1)

    useEffect(() => {
      async function postToOrders(){

        const requestOptions ={
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( "Successful" )
        }

        const response = await fetch("http://localhost:3000/orders/", )
      }
    }, [cart])
  }

    useEffect(() => {
        async function fetchMeals(){
     
          const response = await fetch("http://localhost:3000/meals/");
          // if(!response.ok) {
      
          // }
          const data = await response.json();

          setMeals(data)
        }
        fetchMeals();
      }, []);

      const mealsElements = meals.map(item => {
        return(
          <Meals 
            item={item}
          />
        )
      })


  return (
    <UseReducerComponent />
  );
}

export default App;
