import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";




function App() {
const [listado, setListado]= useState(foods)
const [filterFood, setFilterFood]= useState(foods)
const [isFormShowing, setIsFormShowing]= useState(false)

const añadirFood = (newFood)=>{
  console.log(newFood)
  const cloneFood = JSON.parse(JSON.stringify(listado))
  cloneFood.push(newFood)
  setListado(cloneFood)
  setFilterFood(cloneFood)

}

const searchFood= (search)=>{
  console.log(search)
  const cloneFood = JSON.parse(JSON.stringify(listado))
  let filterArr = cloneFood.filter((eachFood)=>{
    if(eachFood.name.toLowerCase().includes(search.toLowerCase())){
      return true
    }else{
      return false
    }
  })
  setFilterFood(filterArr)
}

const  deleteSomeFood = (foodDeleted)=>{
  const cloneFood = JSON.parse(JSON.stringify(listado))
  const filteredListado = cloneFood.filter((eachFood)=>{
    return eachFood.name === foodDeleted ? false : true
      
    })
    setFilterFood(filteredListado)
  setListado(filteredListado)
}

const toggleForm = ()=>{
  if(isFormShowing === true){
    setIsFormShowing(false)
  }else{
    setIsFormShowing(true)
  }

}
  return (
    <div className="App">

<Button onClick={toggleForm}>{isFormShowing=== true? "Hide Form":"Add New Food" } </Button>


{isFormShowing === true? <AddFoodForm añadirFood={añadirFood}/>: null}
    <Search searchFood={searchFood}/>  
      <Divider>Food List</Divider>
     <Row style={{ width: '100%', justifyContent: 'center' }}>
      
     {filterFood.map((eachFood, index)=>{
      return(
        <div key={index}>
  <FoodBox food = {{
      name: eachFood.name,
  calories: eachFood.calories,
  image: eachFood.image,
  servings: eachFood.servings
     }} deleteFood = {deleteSomeFood}/>
  
        </div>
      )
     })}

     </Row>
    </div>
  );
}

export default App;
