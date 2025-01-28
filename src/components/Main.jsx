import { useState } from 'react'
import Form from './Form'
import Ingredients from './Ingredients'
import Recipe from './Recipe'

// All functionalities to compute and render on the homepage
export default function () {
  const [ingredients, setIngredients] = useState([])
  const ingredientItems = ingredients.map(item => <li key={item}>{item}</li>)

  // Collect data from form and add to list ingredients
  const addNewIngredient = (formData) => {
    const ingredient = formData.get('ingredient')
    if (ingredient.length >= 3) {
      setIngredients(ingredients => [...ingredients, ingredient])
    }
  }

  // Rendering the recipe recieved
  const [recipeShown, setRecipeShown] = useState(false)
  const showRecipe = () => {
    setRecipeShown(prev => !prev)
  }

  return (
    <main>
      <Form addNewIngredient={addNewIngredient}/>
      {ingredients.length > 0 && <Ingredients 
        listItems={ingredientItems}
        ingredients={ingredients}
        show={showRecipe}/>}
      {recipeShown ? <Recipe /> : null}
    </main>
  )
}
