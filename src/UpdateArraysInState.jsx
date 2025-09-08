import { useState } from "react";

export default function UpdateArraysInState() {
  const [foods, setFoods] = useState(["apple", "mango", "banana"]);

  function buttonclick() {
    const newFood = document.getElementById("in").value;

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) => {
          return (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          );
        })}
      </ul>

      <input type="text" id="in" />
      <button onClick={buttonclick}>add</button>
    </div>
  );
}
