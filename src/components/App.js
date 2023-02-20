import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState ("")
  const [items, setItems] = useState ([])
  const [filtering, setFiltering] = useState([])
  
  useEffect( () => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(item => {setItems(item)
    setFiltering(item)})
  }, [])

  function deletedItem(e, id){
    console.log(id + "deleted")
    //delete request
    const configObj = {
      method: 'DELETE',
      headers: { 'Content-Type' : 'application/json' },
    }

    fetch(`http://localhost:6001/listings/${id}`, configObj)
    .then(response => response.json())
  

     const newListing = items.filter(item => item.id !== id)
      setItems(newListing)
  }

  function handleSubmit(e){
    e.preventDefault(); 
    const filtering = items.filter(item => {
      if(search === "") {
        return true } else {
          return item.description.includes(search)
        }
    })
    setFiltering(filtering)
  }

  function sorting(){
    // filtering.sort((a.location, b.location) , {})
    console.log("sorting")
  }

  return (
    <div className="app">
      <Header setSearch = {setSearch} search = {search} handleSubmit = {handleSubmit} items = {items} sorting= {sorting}/>
      <ListingsContainer items = {filtering} setItems = {setItems} deletedItem = {deletedItem}/>
    </div>
  );
}

export default App;
