import { Divider, Input } from 'antd';
import { useState } from 'react';




function AddFoodForm(props) {

    const [nameInput, setNameInput]= useState("");
    const [imageInput, setImageInput] = useState("");
    const[caloriesInput, setCaloriesInput]= useState(0)
    const[servingsInput, setServingsInput]= useState(0)
   
    const handleNameChange = (event)=>{
        setNameInput(event.target.value)
    }
    const handleImageChange = (event)=>{
        setImageInput(event.target.file)
    }
    const handleCaloriesChange = (event)=>{
        setCaloriesInput(event.target.value)
    }
    const handleServingsChange= (event)=>{
        setServingsInput(event.target.value)
    }
   const handleFormSubmit = (event)=>{
    event.preventDefault()

    const newFood = {
        name:nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput,
    }
    
    props.añadirFood(newFood)


    setNameInput("")
    setImageInput("")
    setCaloriesInput(0)
    setServingsInput(0)

   }

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={imageInput} type="file" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={caloriesInput} type="text" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servingsInput} type="text" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
