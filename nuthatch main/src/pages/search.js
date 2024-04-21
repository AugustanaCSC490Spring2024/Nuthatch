import React from "react";
import "../App.css";
import "../styles/Search.css";
import { useState, useEffect } from 'react';
import DrillCardView from '../components/DrillCardView';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(props.data);


    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };


    const filterData = (searchTerm) => {

      const fData = props.data.filter((item) => item['Title'].toLowerCase().includes(searchTerm.toLowerCase()) + item['CODE'].toLowerCase().includes(searchTerm.toLowerCase()) + item['Event'].toLowerCase().includes(searchTerm.toLowerCase()) + item['Category'].toLowerCase().includes(searchTerm.toLowerCase()) + item['Level'].toLowerCase().includes(searchTerm.toLowerCase()) + item['Equipment'].toLowerCase().includes(searchTerm.toLowerCase()) + item['Keywords'].toLowerCase().includes(searchTerm.toLowerCase()) + item['Gender'].toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredData(fData);
    };


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className= 'gridContainer'>

        <div className='cardContainer'>
          {filteredData.map(drillInfo => (
            <DrillCardView cardItem={drillInfo} />

          ))}
        </div>

        <div className= "lessonPlanContainer">
          <h1>No Lesson Plan Available</h1>
        </div>
      </div>
      {/* <ul style={{'background-color': '#fff'}}>
        {filteredData.map(item => (
          <li key={item.CODE}>{item.CODE}: {item.Title}</li>
        ))}
      </ul> */}
      <div>DEBUG: {JSON.stringify(filteredData)}</div>
    </div>
  );
};

 
export default Search;