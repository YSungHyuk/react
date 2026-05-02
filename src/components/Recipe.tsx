type RecipeType = {
  id: string;
  name: string;
  ingredients: string[];
};

type RecipeProps = {
  recipe: RecipeType;
  handleDelete: () => void;
};

export default function Recipe({ recipe, handleDelete }: RecipeProps) {
  console.log(recipe);
  return (
    <>
      <div key={recipe.id}>
        <b>{recipe.name}</b>
        {recipe.ingredients.map((ingredient) => {
          return <div>{ingredient}</div>;
        })}
        <div onClick={() => handleDelete(recipe.id)}>[삭제]</div>
      </div>
    </>
  );
}
