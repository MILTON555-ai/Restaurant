import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import homeLogo from "./images/3.jpg";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div>

        <Link to="/">Home</Link>


      </div>
      <img src={homeLogo} alt="" height={84} width={100} style={{ borderRadius: "30px" }} />
      <div>
        <Link to="/pizza">Pizza</Link>
        <Link to="/drinks">Drinks</Link>
        <Link to="/desserts">Desserts</Link>
        <Link to="/sides">Sides</Link>
        <Link to="/restaurent"> Famous Restaurant</Link>
        <Link to="/add-restaurant">Add</Link>

      </div>


    </div>
  )

}

export default Navbar