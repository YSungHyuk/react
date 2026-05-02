import { useState } from "react";
import Recipe from "./Recipe";
import { initialRecipes } from "../data/initialData";

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleDelete = (id: string) => {
    setRecipes((recipes) => {
      return recipes.filter((recipes) => recipes.id !== id);
    });
  };

  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <Recipe key={recipe.id} {...recipe} handleDelete={handleDelete} />
        );
      })}
    </>
  );
}
