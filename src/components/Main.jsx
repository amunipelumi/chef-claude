import { useState } from 'react'

export default function () {
  const [ingredients, setIngredients] = useState([])
  const ingredientItems = ingredients.map(item => <li key={item}>{item}</li>)

  const addNewIngredient = (formData) => {
    const ingredient = formData.get('ingredient')
    if (ingredient.length >= 3) {
      setIngredients(ingredients => [...ingredients, ingredient])
    }
  }

  return (
    <main>
      <form action={addNewIngredient}>
        <input  
          type="text"
          name="ingredient"
          placeholder="e.g. curry"
          aria-label="Add Ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul aria-live="polite">
          {ingredientItems}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </main>
  )
}
