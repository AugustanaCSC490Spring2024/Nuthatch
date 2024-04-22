import React, { useState } from 'react'; 
import { Dropdown } from 'react-bootstrap'; 
// https://www.geeksforgeeks.org/how-to-use-multi-select-dropdown-in-react-bootstrap/
const DropDown = () => { 
    const [selected_languages, set_Selected_languages] =  
        useState([]); 
    const languages =  
        ['C++', 'Java', 'ReactJS', 'Spring Boot']; 
    const toggleLang = (option) => { 
        if (selected_languages.includes(option)) { 
            set_Selected_languages( 
                selected_languages.filter((item) =>  
                    item !== option)); 
        } else { 
            set_Selected_languages( 
                [...selected_languages, option]); 
        } 
    }; 
    return ( 
        <div> 
            <h1 style={{ color: 'green' }}> 
                GeeksforGeeks 
            </h1> 
            <Dropdown> 
                <Dropdown.Toggle variant="success" 
                                 id="dropdown-basic"> 
                    Select Options 
                </Dropdown.Toggle> 
                <Dropdown.Menu> 
                    {languages.map((option, index) => ( 
                        <Dropdown.Item 
                            key={index} 
                            onClick={() => toggleLang(option)} 
                            active={ 
                                selected_languages.includes(option)} 
                        > 
                            {option} 
                        </Dropdown.Item> 
                    ))} 
                </Dropdown.Menu> 
            </Dropdown> 
            <div> 
                <strong>Selected Options:</strong>  
                    {selected_languages.join(', ')} 
            </div> 
        </div> 
    ); 
}; 
export default DropDown;