import React, { useState } from "react";

export const Main = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  let [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <section className="ingredients-section">
        <h1>Ingredients on hand:</h1>
        <ul>
          {ingredients.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>
    </main>
  );
};
