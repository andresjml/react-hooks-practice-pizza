import React from "react";
import { render } from "react-dom";
import Pizza from "./Pizza";

function PizzaList({data, onClickedPizza}) {  

  const pizzaRender=data.map((pizza) =>{
   return <Pizza key={pizza.id} pizza={pizza} onClickedPizza={onClickedPizza} />
  })
console.log(pizzaRender)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaRender}
      </tbody>
    </table>
  );
}

export default PizzaList;
