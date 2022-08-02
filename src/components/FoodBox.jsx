import React from 'react'

export default function foodBox(props) {
    const { food } = props
    console.log(food)
    return (
        <div className='each-food-box'>
            <div className='food-name-box'>
                <p>{food.name}</p>
            </div>
            <img src={food.image} alt={food.name} width='150px' />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p> <strong>Total Calories: {food.calories} kcal</strong></p>
            <button>Delete</button>
        </div >
    )
}
