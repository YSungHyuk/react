import { useState } from "react";
import Recipe from "./Recipe";

export default function RecipeList() {
  const [recipe, setRecipe] = useState([
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini",
      ],
    },
  ]);

  const handleDelete = (id: string) => {
    setRecipe((recipe) => {
      return recipe.filter((recipe) => recipe.id !== id);
    });
  };

  return (
    <>
      <h1>Recipes</h1>
      {recipe.map((item) => {
        return <Recipe recipe={item} handleDelete={handleDelete} />;
      })}
    </>
  );
}
