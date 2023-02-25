import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import img3 from '../images/noon.gif'

function Menu() {
  return (
    <div className='fluid-container'>
        <div className='row'>
        <div className='col-md-1'>
            <Dropdown>
            <Dropdown.Toggle className='bg-white border-0 fw-bold my-2' variant="" id="dropdown-basic">
               ALL CATEGORIES
            </Dropdown.Toggle>
            </Dropdown>
        </div>
        <div className='col-md-9 d-flex justify-content-center align-items-center'>
            <button className='border-0 bg-white fw-bold'>ELECTRONICS</button>
            <button className='border-0 bg-white fw-bold'>MEN</button>
            <button className='border-0 bg-white fw-bold'>WOMEN</button>
            <button className='border-0 bg-white fw-bold'>HOME</button>
            <button className='border-0 bg-white fw-bold'>BEAUTY & FRAGRANCE</button>
            <button className='border-0 bg-white fw-bold'>BABY & TOYS</button>
            <button className='border-0 bg-white fw-bold'>SPORTS</button>
            <button className='border-0 bg-white fw-bold'>BESTSELLERS</button>
            <button className='border-0 bg-white fw-bold'>SELL ON NOON</button>
        </div>
        <div className='col-md-2'> 
            <img className='my-2' src={img3} width='70%' />
        </div>
        </div>
    </div>
  );
}

export default Menu;