import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";




function App() {
const [listado, setListado]= useState(foods)

const añadirFood = (newFood)=>{
  console.log(newFood)
  const cloneFood = JSON.parse(JSON.stringify(listado))
  cloneFood.push(newFood)
  setListado(cloneFood)

}

  return (
    <div className="App">

      <AddFoodForm añadirFood={añadirFood}/>
    <Search/>
      <Divider>Food List</Divider>
     <Row style={{ width: '100%', justifyContent: 'center' }}>
      
     {listado.map((eachFood, index)=>{
      return(
        <div key={index}>
  <FoodBox food = {{
      name: eachFood.name,
  calories: eachFood.calories,
  image: eachFood.image,
  servings: eachFood.servings
     }}/>
  
        </div>
      )
     })}

     </Row>
    </div>
  );
}

export default App;
