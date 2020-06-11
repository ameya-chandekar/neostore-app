// import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import sweetalert2 from 'sweetalert2'
import React, { Component } from 'react'
//redux imports
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText:"",

    }
  }



handleSearch=  async(e) => {
  const { name, value } = e.target;
  await this.setState({ [name]: value });
  const {searchText}=this.state
  console.log(searchText)
this.props.onSearch({searchText})
}

  handleLogout = () => {
    localStorage.removeItem("login_user_data")
    sweetalert2.fire({
      "title": 'Logged Out',
      'text': 'Logged out successfully',
      "icon": 'success'
    })
  }
  render() {

    return (
      <div className="navigation" >

        <div className=" ">

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
                  <li className="mx-5">  <Link to="/"><button className=" btn nav-btn nav-item " href="#">Home </button></Link></li>

                  <li className="mx-5"><Link to="/Products"><button className="btn nav-btn nav-item" href="#">Products</button></Link></li>

                  <li className="mx-5"> <Link to="/UserOrders"><button className="btn nav-btn nav-item" href="#"  >Order</button></Link></li>
                </ul>
              </div>
              <div  >
                <ul className="navbar-nav navbar-ul ">
                  <li className="  ml-5 mr-1">
                    <form className="form-inline  mt-2 ">
                      <input className="form-control  nav-search px-5 searchbar " name="searchText" type="search" placeholder="Search product here.." aria-label="Search"
                      onChange={this.handleSearch} />
                      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                  </li>
                  <li>
                    <Link to="/Cart"><button className="btn btn-light mt-2 px-4" > <i style={{ color: 'rgb(68, 68, 68)', padding: '7px 3px' }} className="fa fa-cart-arrow-down"></i> </button></Link>
                  </li>
                  <li className="nav-item dropdown ">

                    <button style={{ color: 'rgb(68, 68, 68)', borderRadius: '4px' }} className=" px-4 mt-2 ml-1 btn btn-light dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span style={{ backgroundColor: 'rgb(68, 68, 68)', borderRadius: '2px' }}>
                        <i style={{ color: 'white', padding: '7px 3px' }} className="fa fa-user"></i>
                      </span>

                    </button>
                    {this.props.login == 'true' ?
                      <div className="dropdown-menu bg-light  " aria-labelledby="navbarDropdown">
                        <Link to="/UserProfile"> <button className="dropdown-item " >Profile</button></Link>
                        <Link to="/"> <button className="dropdown-item" href="#" onClick={this.handleLogout}>Logout</button></Link>
                      </div> :
                      <div className="dropdown-menu bg-light  " aria-labelledby="navbarDropdown">
                        <Link to="/Loginpage"> <button className="dropdown-item " >Login</button></Link>
                        <Link to="/RegisterPage"> <button className="dropdown-item" href="#">Register</button></Link>
                      </div>
                    }
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div></div>

    )
  }
}

const mapStateToProps = state => {
  return {   
 
  };
  
  
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch:(payload)=>dispatch(actions.getProductBySearchText(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
