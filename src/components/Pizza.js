import React from "react";

function Pizza({pizza, onClickedPizza}) {
  const {id, topping,size,vegetarian}=pizza
  
  function handleclick(){
    onClickedPizza(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleclick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
