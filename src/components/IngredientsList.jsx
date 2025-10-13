export const IngredientsList = ({ ingredients, showRecipeClick }) => {
  return (
    <section className="ingredients-section">
      <h1>Ingredients on hand:</h1>
      {ingredients.length < 1 ? (
        <span>No ingredients added yet...</span>
      ) : (
        <>
          <ul>
            {ingredients.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          {ingredients.length > 3 ? (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={showRecipeClick}>Get a recipe</button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
};
