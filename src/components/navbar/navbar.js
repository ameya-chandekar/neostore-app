import React from 'react'
import "../navbar/navbar.css"
function Navbar() {
    return (
      <div className="navigation" >
        <div className="container-fluid ">
      <nav class="navbar navbar-expand-lg navbar-light  ">
<a class="navbar-brand" href="#"><b style={{fontSize:'40px',color:'white'}}>Neo</b><b style={{fontSize:'40px',color:'red'}}>STORE</b></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
<li class="nav-item">
  <button class=" btn nav-btn" href="#">Home </button>
</li>
<li class="nav-item">
  <button class="btn nav-btn" href="#">Products</button>
</li>

<li class="nav-item">
  <button class="btn nav-btn" href="#"  >Order</button>
</li>
<li>
<form class="form-inline my-2 my-lg-0">
<input class="form-control mr-sm-2 nav-search" type="search" placeholder="Search.." aria-label="Search"/>
{/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
</form>
</li>
<li>
  <button className="btn btn-light" style={{width:'60px'}}> <i  style={{color:'rgb(68, 68, 68)' ,padding:'7px 3px'}} class="fa fa-cart-arrow-down"></i> </button>
</li>
<li  class="nav-item dropdown">
   
  <button  style={{color:'rgb(68, 68, 68)',borderRadius:'4px'}} class="btn btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span style={{backgroundColor:'rgb(68, 68, 68)',borderRadius:'2px'}}> 
  <i style={{color:'white' ,padding:'7px 3px'}} class="fa fa-user"></i>
  </span>
  </button>
   <div class="dropdown-menu bg-light " aria-labelledby="navbarDropdown">
       <button class="btn nav-btn">
       <a class="dropdown-item" href="#">Login</a>
       <a class="dropdown-item" href="#">Register</a>
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
