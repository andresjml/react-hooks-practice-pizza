import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [data, setData]=useState([])
   const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() =>{
    fetch(`http://localhost:3001/pizzas`)
      .then(r => r.json())
      .then(setData)
  },[]);

   function handleChangeForm(name, value) {
    setSelectedPizza({
      ...selectedPizza,
      [name]: value,
    });
  }

  function handleEditPizza(updatedPizza) {
    const updatedPizzas = data.map((pizza) =>
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    setSelectedPizza(updatedPizza);
    setData(updatedPizzas);
  }
  


  return (
    <>
      <Header />
      <PizzaForm pizza={selectedPizza} onChangeForm={handleChangeForm} onEditPizza={handleEditPizza} />
      <PizzaList data={data} onClickedPizza={setSelectedPizza}/>
    </>
  );
}

export default App;
