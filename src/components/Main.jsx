import { useState } from 'react'
import { aiRecipe } from '../../inference/huggingface'

import Form from './Form'
import Ingredients from './Ingredients'
import Recipe from './Recipe'

// All functionalities to compute and render on the homepage
export default function () {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState('')

  // Collect data from form and add to list ingredients
  const addNewIngredient = (formData) => {
    const ingredient = formData.get('ingredient')
    if (ingredient.length >= 3) {
      setIngredients(ingredients => [...ingredients, ingredient])
    }
  }

  // Generate recipe from ingredients
  const getRecipe = async () => {
    const recipeRes = await aiRecipe(ingredients)
    setRecipe(recipeRes)
  }

  return (
    <main>
      <Form addNewIngredient={addNewIngredient}/>
      {
        ingredients.length > 0 && <Ingredients 
        ingredients={ingredients} 
        getRecipe={getRecipe}/>
      }
      {
        recipe && <Recipe recipe={recipe}/>
      }
    </main>
  )
}
