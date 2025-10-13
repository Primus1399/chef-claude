const API_URL = "http://localhost:3001/api";

export async function getRecipeFromChefClaude(ingredientsArr) {
  try {
    const response = await fetch(`${API_URL}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    if (!response.ok) {
      throw new Error("Failed to get recipe");
    }

    const data = await response.json();
    return data.recipe;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
