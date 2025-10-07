import React, { useState } from "react";

export const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setItem = formData.get("ingredient");
    ingredients.push(setItem);
    console.log(ingredients);
  };
  const [item, setItem] = useState("");
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          // value={ingredient}
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
