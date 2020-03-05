import React from 'react'
import "../navbar/navbar.css"
function Navbar() {
  return (
    <div className="navigation" >
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <a className="navbar-brand" href="#"><b style={{ fontSize: '40px', color: 'white' }}>Neo</b><b style={{ fontSize: '40px', color: 'red' }}>STORE</b></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <button className=" btn nav-btn" href="#">Home </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-btn" href="#">Products</button>
              </li>

              <li className="nav-item">
                <button className="btn nav-btn" href="#"  >Order</button>
              </li>
              <li>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2 nav-search" type="search" placeholder="Search.." aria-label="Search" />
                  {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
              </li>
              <li>
                <button classNameName="btn btn-light" style={{ width: '60px' }}> <i style={{ color: 'rgb(68, 68, 68)', padding: '7px 3px' }} className="fa fa-cart-arrow-down"></i> </button>
              </li>
              <li className="nav-item dropdown">

                <button style={{ color: 'rgb(68, 68, 68)', borderRadius: '4px' }} className="btn btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span style={{ backgroundColor: 'rgb(68, 68, 68)', borderRadius: '2px' }}>
                    <i style={{ color: 'white', padding: '7px 3px' }} className="fa fa-user"></i>
                  </span>
                </button>
                <div className="dropdown-menu bg-light " aria-labelledby="navbarDropdown">
                  <button className="btn nav-btn">
                    <a className="dropdown-item" href="#">Login</a>
                    <a className="dropdown-item" href="#">Register</a>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div></div>

  )
}

export default Navbar
