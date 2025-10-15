import { useEffect, useRef, useState } from "react";
import { Recipe } from "./Recipe";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromChefClaude } from "../services/ai";

export const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const [recipeShown, setrecipeShown] = useState(false);

  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe) {
      recipeSection.current.scrollIntoView();
    }
  }, [recipe]);

  const addIngredient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    e.currentTarget.reset();
  };

  const showRecipeClick = async () => {
    setrecipeShown((prevRecipeShown) => !prevRecipeShown);
    const generatedRecipe = await getRecipeFromChefClaude(ingredients);
    setRecipe(generatedRecipe);
  };

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={addIngredient}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      <IngredientsList
        ingredients={ingredients}
        showRecipeClick={showRecipeClick}
        ref={recipeSection}
      />
      {recipeShown && <Recipe recipe={recipe} ref={recipeSection} />}
    </main>
  );
};
