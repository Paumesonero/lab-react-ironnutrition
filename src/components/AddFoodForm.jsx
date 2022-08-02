import React, { useState } from 'react'

export default function (props) {
    const { newFood } = props
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')


    const handleForm = (e) => {
        e.preventDefault();
        const food = {
            name: name,
            image: image,
            calories: parseInt(calories),
            servings: parseInt(servings)
        }
        newFood(food)
        setName('')
        setImage('')
        setCalories('')
        setServings('')
    }
    return (
        <form action="" onSubmit={handleForm}>
            <h2>Add Food Entry</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="text" id='image' value={image} onChange={(e) => { setImage(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="calories">Calories</label>
                <input type="number" id='calories' value={calories} onChange={(e) => { setCalories(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="servings">Servings</label>
                <input type="number" id='servings' value={servings} onChange={(e) => { setServings(e.target.value) }} />
            </div>
            <button>Create</button>
        </form>

    )
}
