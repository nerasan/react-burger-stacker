import React, {useState} from "react";
import shortid from 'shortid'

const IngredientList = ({ingredients, addIngredient}) => {

  const [name, setName] = useState('')

  const addToStack = e => {
    console.log("console log of e.target.value:", e.target.value)
    e.preventDefault()
    setName(e.target.value)
    addIngredient({
      id: shortid.generate(),
      name: name,
    })
  }

  return (
  <div>
    ingredient list here
    {ingredients.map((ingredient, i)=>{
      console.log("ingredient.name:", ingredient.name)
      return (
      <form onSubmit={addToStack}>
          {ingredient.name}
          <input name="name" value={ingredient.name} />
          <button onSubmit={addToStack}>+</button>
      </form>
      )
      })}
  </div>
  )
};

export default IngredientList;

      // <li key={i}>
      //   {ingredient.name} <button onClick={addIngredient}>+</button>
      // </li>