import React, { useState } from 'react';
import './App.css';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodData)

  const handleNewFood = (food) => {
    const foodsCopy = [...foods]
    foodsCopy.push(food)
    setFoods(foodsCopy)
  }
  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <AddFoodForm newFood={handleNewFood} />
      </div>
      <div className='main-content-box'>
        {foods.map(el => {
          return <FoodBox food={{ name: el.name, calories: el.calories, image: el.image, servings: el.servings }} />
        })}
      </div>
    </div>
  );
}

export default App;
