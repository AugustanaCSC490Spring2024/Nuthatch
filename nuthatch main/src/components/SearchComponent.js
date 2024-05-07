import React from "react";
import "../App.css";
import "../styles/Search.css";
import "../styles/TextCardView.css";
import { useState, useEffect } from 'react';
import DrillCardView from './DrillCardView';
import { getCardsBySearch } from '../drillDB';

const SearchComponent = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(props.data);
    const [isImageView, setisImageView] = useState(false);

    const handleChange = () => {
      setisImageView(!isImageView);
    };
  
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };

    const filterData = (searchTerm) => {

      const fData = getCardsBySearch(searchTerm);
    setFilteredData(fData);
    };

  return (
    <div>
      <div className = 'search-container'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      <button onClick={handleChange} className={`toggle-button ${isImageView ? 'image' : 'text'}`}>
        {isImageView ? 'Image' : 'Text'}
      </button>
      <div className= 'gridContainer'>
        <div className='cardContainer'>
          {isImageView ? (
              filteredData.map(drillInfo => (
                
                <DrillCardView cardItem={drillInfo} addCardToLessonFunction={props.addCardToLessonFunction}/>
              ))) : (
                <ul class = "TextViewList">
                {filteredData.map(item => (
                  <li key={item.CODE}>{item.CODE}: {item.Title} <button className="addBtn" onClick={() => props.addCardToLessonFunction(item.CODE)}>Add</button></li>
                ))}
                </ul>
          )
          }
        <ul>
        {}
        </ul>
          {}
        </div>

      </div>

    </div>
  );
};

export default SearchComponent;