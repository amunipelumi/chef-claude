export default function (props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul aria-live="polite">
        {props.listItems}
      </ul>
      {props.ingredients.length > 3 && <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.show}>Get a recipe</button>
      </div>}
    </section>
  )
}
