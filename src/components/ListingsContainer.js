import React from "react";
import ListingCard from "./ListingCard"
// import ListingCard from "./ListingCard";



function ListingsContainer({items, setItems, deletedItem}) {

  const makingLists = items.map(item => {return <ListingCard key = {item.id} deletedItem = {deletedItem} item = {item}/> })

  return (
    <main>
      <ul className="cards">
        {makingLists}
        {
        /* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
