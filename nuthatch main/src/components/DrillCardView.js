import React from "react";

const Search = (props) => {
  const cardItem = props.cardItem;
  
  return (
    <div>

      <h2>{cardItem.Title}</h2>

      <img src={cardItem.thumbnailURL} />

      <ul>

        <li><h3>Code</h3>{cardItem.CODE}</li>

        <li><h3>Event</h3>{cardItem.Event}</li>

        <li><h3>Category</h3>{cardItem.Category}</li> 

        <li><h3>Level</h3>{cardItem.Level}</li>

        <li><h3>Equipment</h3>{cardItem.Equipment}</li> 

        <li><h3>Gender</h3>{cardItem.Gender}</li>

      </ul>

    </div>
  );
};

 
export default Search;