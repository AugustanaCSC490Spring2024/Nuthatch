import React from "react";
import "../App.css";
// import "../styles/search.css";
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
        const fData = props.data.filter((item) =>
        item['Title'].toLowerCase().includes(searchTerm.toLowerCase())
        );
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

      <div style={{'background-color': '#fff'}}>
        {filteredData.map(drillInfo => (
          <DrillCardView cardItem={drillInfo} />
        ))}
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