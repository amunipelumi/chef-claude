export default function (props) {
  return (
    <form action={props.addNewIngredient}>
      <input  
        type="text"
        name="ingredient"
        placeholder="e.g. curry"
        aria-label="Add Ingredient"
      />
      <button>Add Ingredient</button>
    </form>
  )
}
