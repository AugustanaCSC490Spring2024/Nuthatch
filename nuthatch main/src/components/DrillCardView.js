import React from "react";

const Search = (props) => {
  const cardItem = props.cardItem;
  
  return (
    <div>
      <h2>{cardItem.CODE}</h2>
      <img src={cardItem.thumbnailURL} />
      <ul>
        <li>{cardItem.Title}</li>
        <li>{cardItem.Event}</li>
        <li>{cardItem.Category}</li>  
      </ul>
      {/* {"CODE":"S1","Event":"ALL","Category":"Shapes","Title":"Hollow","Pack Folder":"Demo1","Image":"1.png","Gender":"N","Model Sex":"F","Level":"ALL","Equipment":"None","Keywords":"hollow, dish, banana," */}

    </div>
  );
};

 
export default Search;