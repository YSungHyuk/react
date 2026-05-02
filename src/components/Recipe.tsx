type RecipeType = {
  id: string;
  name: string;
  ingredients: string[];
  handleDelete: () => void;
};

export default function Recipe({
  id,
  name,
  ingredients,
  handleDelete,
}: RecipeType) {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <button onClick={() => handleDelete(id)}>[삭제]</button>
    </>
  );
}
