import React, { useEffect } from "react";
import "../App.css";
import "../styles/Search.css";
import "../styles/TextCardView.css";
import { useState } from 'react';
import DrillCardView from './DrillCardView';
import { getCardsBySearch } from '../drillDB';

const SearchComponent = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isImageView, setisImageView] = useState(true);

    useEffect(() => { 
      setFilteredData(props.drillLibrary);
    }, [props.drillLibrary]);
    
    const handleChange = () => {
      setisImageView(!isImageView);
    };
  
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };

    const filterData = (searchTerm) => {

      const fData = getCardsBySearch(props.drillLibrary, searchTerm);
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
      {isImageView? (
            <div className='cardContainer'>
              {filteredData.map(drillInfo => {
                return (
                  <DrillCardView key={drillInfo.CODE} cardItem={drillInfo} addCardToLessonFunction={props.addCardToLessonFunction}/>
                );
              })}
              </div>
              ) : (
                <ul class = "TextViewList">
                {filteredData.map(item => (
                  <li key={item.CODE}><button className="btn3" onClick={() => props.addCardToLessonFunction(item.CODE)}>Add</button> {item.CODE}: {item.Title}  </li>
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
  );
};

export default SearchComponent;