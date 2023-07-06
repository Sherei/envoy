import React from 'react'
import { FaSearch } from "react-icons/fa";
import "./navbar.css"
const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#212121" }}>
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="/"><img src="logo.png" /></a>
        <div className='search_main'>
          <span className='mx-2'><FaSearch /></span>
          <input type="text" className='search_nav' placeholder='Search' />
        </div>
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/#'>Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/#'>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/#'>My Booking</a>
            </li>
          </ul>
          <div classNameName="nav-item d-flex gap-4">
            <button className="btn login-btn" >Login/Register</button>
            <button className="btn join-btn mx-3" >Join Now</button>
          </div>
        </div>
      </div>
    </nav>

    {/* <div classNameName='container-fluid' style={{ backgroundColor: "#212121", boxShadow: "1px 1px 1px 10px #212121" }}>
      <div classNameName='row' style={{ height: "60px" }}>
        <div classNameName='col-lg-4 border  '>
          <div classNameName='d-flex align-items-center' style={{ height: "60px" }}>
            <img src="logo.png" alt="" />
            <input type="Search" />
          </div>
        </div>
        <div classNameName='col-lg-5 border links d-flex gap-4 align-items-center justify-content-end border'>
          <li>locations</li>
          <li>Services</li>
          <li>My Bookings</li>
        </div>
        <div classNameName='col-lg-3 d-flex gap-4 align-items-center justify-content-center border'>
          <button classNameName='btn  login-btn1'>Login/Register</button>
          <button classNameName='btn btn-primary login-btn'>Join Now</button>
        </div>
      </div>
    </div> */}
  </>
}

export default Navbar