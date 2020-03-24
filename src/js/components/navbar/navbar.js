import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div className="navigation" >

      <div className="container-fluid d-flex">

        <nav className="navbar navbar-expand-lg navbar-light  ">

          <a className="navbar-brand" href="#">
            <b style={{ fontSize: '40px', color: 'white' }}>Neo</b>
            <b style={{ fontSize: '40px', color: 'red' }}>STORE</b>
          </a>

          <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="m-auto d-flex flex-row">
            <ul className="navbar-nav navbar-ul ">
            <li>  <Link to="/"><button className=" btn nav-btn nav-item" href="#">Home </button></Link></li>

              <li><Link to="/Products"><button className="btn nav-btn nav-item" href="#">Products</button></Link></li>

              <li><button className="btn nav-btn nav-item" href="#"  >Order</button></li>
              </ul>
              </div>
              <div className="m-auto d-flex  " >
              <ul className="navbar-nav navbar-ul ">
              <li>
                <form className="form-inline  mt-2">
                  <input className="form-control  nav-search" type="search" placeholder="Search.." aria-label="Search" />
                  {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
              </li>
              <li>
                <Link to="/Cart"><button className="btn btn-light m-1 pr-3 pl-3" > <i style={{ color: 'rgb(68, 68, 68)', padding: '7px 3px' }} className="fa fa-cart-arrow-down"></i> </button></Link>
              </li>
              <li className="nav-item dropdown">

                <button style={{ color: 'rgb(68, 68, 68)', borderRadius: '4px' }} className=" m-1 btn btn-light dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span style={{ backgroundColor: 'rgb(68, 68, 68)', borderRadius: '2px' }}>
                    <i style={{ color: 'white', padding: '7px 3px' }} className="fa fa-user"></i>
                  </span>

                </button>


                <div className="dropdown-menu bg-light  " aria-labelledby="navbarDropdown">

                  <Link to="/Loginpage"> <button className="dropdown-item " >Login</button></Link>
                  <Link to="/RegisterPage"> <button className="dropdown-item" href="#">Register</button></Link>

                </div>
              </li>
             
            </ul>
            </div>
          </div>
        </nav>
      </div></div>

  )
}

export default Navbar
