import React from 'react'

export default function foodBox(props) {
    const { food, onDelete } = props

    let totalCaloriesMath = food.calories * food.servings
    return (
        <div className='each-food-box'>
            <div className='food-name-box'>
                <p>{food.name}</p>
            </div>
            <img src={food.image} alt={food.name} width='150px' />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p> <strong>Total Calories: {totalCaloriesMath} kcal</strong></p>
            <button onClick={() => onDelete(food.name)}>Delete</button>
        </div >
    )
}
