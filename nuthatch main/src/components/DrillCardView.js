import React from "react";
import "../styles/DrillCardView.css";

const Search = (props) => {
  const cardItem = props.cardItem;
  
  return (
    <div>
      <section>
          <div className="cards">
            <div className="title">
              <h1>{cardItem.Title}</h1>
            </div>

            <img src={cardItem.thumbnailURL} />

            <button className = "btn">Add to plan</button>
          
      </div>
      </section>
    </div>
  );
};

 
export default Search;