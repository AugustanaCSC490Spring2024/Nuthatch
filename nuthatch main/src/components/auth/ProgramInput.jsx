import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';

const ProgramInput = () => {
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
        <div className='sign_container'>
                <div className='sign_header'>
                    <div className='sign_text'>Set Your Program</div>
                    <div className='sign_underline'></div>
                </div>
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
                
                <Form>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label >    <h3 class = 'aligncenter'>Event</h3> 
                        </Form.Label>
                            {['checkbox'].map((type) => (
                                <div align = "left">
                                    <div key={`reverse-${type}`} className="mb-3" >
                                        <Form.Check
                                            label="Floor"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-1`}
                                        />
                                        <Form.Check
                                            label="Pommel Horse"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-2`}
                                        />
                                        <Form.Check
                                            label="Rings"
                                            type={type}
                                            id={`reverse-${type}-3`}
                                        />
                                        <Form.Check
                                            label="Vault"
                                            type={type}
                                            id={`reverse-${type}-4`}
                                        />
                                        <Form.Check
                                            label="Horizontal Bar"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>    <h3 class = 'alignright'> Category</h3> 
                        </Form.Label>
                            {['checkbox'].map((type) => (
                                    <div key={`reverse-${type}`} className="mb-3" >
                                        <Form.Check
                                            label="Dive Roll"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-1`}
                                        />
                                        <Form.Check
                                            label="Endo Roll"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-2`}
                                        />
                                        <Form.Check
                                            label="Press"
                                            type={type}
                                            id={`reverse-${type}-3`}
                                        />
                                        <Form.Check
                                            label="Handstand"
                                            type={type}
                                            id={`reverse-${type}-4`}
                                        />
                                        <Form.Check
                                            label="Round Off"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Pommel Horse"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Rings"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Vault"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Forward Salto"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Pbars"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Horizontal Bar"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                    </div>
                            ))}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>    <h3 class = 'alignright'> Category</h3> 
                        </Form.Label>
                        {['checkbox'].map((type) => (
                                    <div key={`reverse-${type}`} className="mb-3" >
                                        <Form.Check
                                            label="Dive Roll"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-1`}
                                        />
                                        <Form.Check
                                            label="Endo Roll"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-2`}
                                        />
                                        <Form.Check
                                            label="Press"
                                            type={type}
                                            id={`reverse-${type}-3`}
                                        />
                                        <Form.Check
                                            label="Handstand"
                                            type={type}
                                            id={`reverse-${type}-4`}
                                        />
                                        <Form.Check
                                            label="Round Off"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Pommel Horse"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Rings"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Vault"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Forward Salto"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Pbars"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                        <Form.Check
                                            label="Horizontal Bar"
                                            type={type}
                                            id={`reverse-${type}-5`}
                                        />
                                    </div>
                            ))}
                        </Form.Group>
                        <select className="dropdown-button-right">
                            <option value="option1">Dive Roll</option>
                            <option value="option2">Endo Roll</option>
                            <option value="option3">Press</option>
                            <option value="option4">Handstand</option>
                            <option value="option5">Round Off</option>
                            <option value="option6">Pommel Horse</option>
                            <option value="option7">Rings</option>
                            <option value="option8">Vault</option>
                            <option value="option9">Forward Salto</option>
                            <option value="option10">Pbars</option>
                            <option value="option11">Horizontal Bar</option>
                        </select>
                    

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                    {/* <h3 class = 'alignleft'>Event</h3>    
                        <select className="dropdown-button-left">
                            <option value="option1">Floor</option>
                            <option value="option2">Pommel Horse</option>
                            <option value="option3">Rings</option>
                            <option value="option4">Vault</option>                                <option value="option5">Parallel Bars</option>
                            <option value="option5">Horizontal Bar</option>
                        </select>

                        <h3 class = 'alignright'>Category</h3>

                        <select className="dropdown-button-right">
                            <option value="option1">Dive Roll</option>
                            <option value="option2">Endo Roll</option>
                            <option value="option3">Press</option>
                            <option value="option4">Handstand</option>
                            <option value="option5">Round Off</option>
                            <option value="option6">Pommel Horse</option>
                            <option value="option7">Rings</option>
                            <option value="option8">Vault</option>
                            <option value="option9">Forward Salto</option>
                            <option value="option10">Pbars</option>
                            <option value="option11">Horizontal Bar</option>
                        </select>
                        
                        
                        
                        <h3 class = 'alignleft'>Gender</h3>
                        <select className="dropdown-button-left">
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                            <option value="option3">Both</option>
                        </select>

                        <h3 class = 'alignright'>Level</h3>
                        <select className="dropdown-button-right">
                            <option value="option1">AB</option>
                            <option value="option2">I</option>
                            <option value="option3">B</option>
                        </select> */}
                    
                  
                <div className='sign_forgot-password'>Lost Password? <span>Click here</span></div>
                <div className='sign_submit-container'>
                    <button type="submit" className="sign_submit">Log In</button>
                </div> 
                
        </div>
    );

};

export default ProgramInput;