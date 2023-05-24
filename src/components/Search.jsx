import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {

const [searchInput, setSearchInput]= useState("")

const handleSearchChange = (event)=>{
  console.log(event.target.value)

  setSearchInput(event.target.value)
  props.searchFood(event.target.value)
}

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleSearchChange} />
    </>
  );
}

export default Search;
