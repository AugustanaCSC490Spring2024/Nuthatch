import React from "react";
import "../App.css";
import "../styles/Search.css";
import { useState, useEffect } from 'react';
import DrillCardView from './DrillCardView';
import { getCardsBySearch } from '../drillDB';

const SearchComponent = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(props.data);
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
      setIsToggled(!isToggled);
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
      <button onClick={handleChange} className={`toggle-button ${isToggled ? 'image' : 'text'}`}>
        {isToggled ? 'Image' : 'Text'}
      </button>
      <div className= 'gridContainer'>
        <div className='cardContainer'>
        <ul>
        {filteredData.map(item => (
          <li key={item.CODE}>{item.CODE}: {item.Title}</li>
        ))}
        </ul>
          {filteredData.map(drillInfo => (
            <DrillCardView cardItem={drillInfo} addCardToLessonFunction={props.addCardToLessonFunction}/>

          ))}
        </div>

      </div>

    </div>
  );
};

export default SearchComponent;