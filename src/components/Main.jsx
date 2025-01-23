import { useState } from 'react'

// const ingredientArray = JSON.parse(localStorage.getItem('ings')) || []

// const ingredientListFunc = () => {
//   const ingredientItems = ingredientArray.map((item) => {
//     return <li key={item}>{item}</li>
//   })
//   return ingredientItems
// }

export default function () {
  const [ingredients, setIngredients] = useState([])
  const ingredientItems = ingredients.map(item => <li key={item}>{item}</li>)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const ingredient = formData.get('ingredient')

    if (ingredient.length >= 3) {
      // ingredientArray.push(ingredient)
      // localStorage.setItem('ings', JSON.stringify(ingredientArray))
      // setIngredients(ingredientListFunc)
      setIngredients(ingredients => [...ingredients, ingredient])
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input  
          type="text"
          name="ingredient"
          placeholder="e.g. curry"
          aria-label="Add Ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <div>
        <h2>Ingredients:</h2>
        <ul>
          {ingredientItems}
        </ul>
      </div>
    </main>
  )
}
