import React, { useState } from 'react';
import './App.css';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodData)

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setFoods(foodData)
    } else {
      const filtered = foods.filter(el => el.name.toLowerCase().includes((searchValue).toLowerCase()))
      setFoods(filtered)
    }
  }

  const handleNewFood = (food) => {
    const foodsCopy = [...foods]
    foodsCopy.push(food)
    setFoods(foodsCopy)
  }

  const handleDelete = (foodName) => {
    const filteredFood = foods.filter(el => {
      return el.name !== foodName
    })
    setFoods(filteredFood)
  }
  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <Search onSearch={handleSearch} />
      </div>
      <div>
        <AddFoodForm newFood={handleNewFood} />
      </div>
      <div className='main-content-box'>
        {foods.map(el => {
          return <FoodBox onDelete={handleDelete} food={{ name: el.name, calories: el.calories, image: el.image, servings: el.servings }} />
        })}
      </div>
    </div>
  );
}

export default App;
