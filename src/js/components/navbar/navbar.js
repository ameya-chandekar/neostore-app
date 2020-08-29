// import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import sweetalert2 from 'sweetalert2'
import React, { Component } from 'react'
//redux imports
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import * as actionss from '../../redux/actions/placeOrderAction';
import { Redirect } from 'react-router-dom'
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText:"",
      login: this.props.login,
    }
  }
handleSearch=  (e) => {
  // this.props.history.push("/Products")
  const { name, value } = e.target;
  this.setState({ [name]: value });
  const {searchText}=this.state
  console.log(searchText,"searchtext")
  this.props.onSearch({searchText})
  // this.props.history.push('/Products')
  // return <Redirect to="/Products"/>
}

  handleLogout = async () => {
    let data1 = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
    const data2 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data2);
    const user_token = userData?userData.token:""

  // if (data1) {
    data1.push({ flag: "logout" });
    this.props.placeOrder({data1,user_token})
    .then(()=>{
      this.setState({ login: false })
      localStorage.removeItem("login_user_data")
      localStorage.removeItem("editAddress")
      localStorage.setItem('cart', [])
      sweetalert2.fire({
        "title": 'Logged Out',
        'text': 'Logged out successfully',
        "icon": 'success'
      })      
    })
  }      
  // }
   componentDidMount() {
    this.props.onGetNavProduct({category_id:"",color_id:"",});
    if (this.props.login === 'true') {
        this.setState({
            login: true
        })
    }
    else {
        this.setState({
            login: false
        })
    }
}
  render() {
    const localCartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : []
    const cartCount = localCartData.length;
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
              <div className="d-flex flex-row">
                <ul className="navbar-nav navbar-ul ">
                  <li className="mx-5">  <Link to="/"><button className=" btn nav-btn nav-item " href="#">Home </button></Link></li>

                  <li className="mx-5"><Link to="/Products"><button className="btn nav-btn nav-item" href="#">Products</button></Link></li>

                  <li className="mx-5"> <Link to="/UserOrders"><button className="btn nav-btn nav-item" href="#"  >Order</button></Link></li>
                </ul>
              </div>
              <div  >
                <ul className="navbar-nav navbar-ul row ">
                  <li className="searchbox" >

                    <Autocomplete

                    style={{height:"45px",marginTop:"-17px"}}
                      id="free-solo-demo"
                      freeSolo
                      options={this.props.suggetions?this.props.suggetions.map(options=> { return options.product_name }
                      ):null}
                      onChange={ this.handleSearch}
                      name="searchText"
                      renderInput={(params) => (
                      <TextField {...params} className="serchbar" onKeyUp={this.handleSearch} onChange={ this.handleSearch} onkeyPress={ this.handleSearch} margin="normal"  name="searchText" placeholder="Search Here..." variant="outlined" style={{ backgroundColor: "white",width:"100%", height:"45px"}} />
                    )}
                     />
                  </li>
                  <li className="cartbtn ">
                    <Link to="/Cart"><button className="btn btn-light px-3 mt-2 mx-1" >  <span className="top_header_cart_count px-1"><sup>{cartCount}</sup></span><i style={{ color: 'rgb(68, 68, 68)', padding: '7px 3px' }} className="fa fa-cart-arrow-down"></i> </button></Link>
                  </li>
                  <li className="nav-item dropdown optionsbtn">

                    <button style={{ color: 'rgb(68, 68, 68)', borderRadius: '4px' }} className="px-3 mt-2 mx-1  btn btn-light dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span  style={{ backgroundColor: 'rgb(68, 68, 68)', borderRadius: '2px' }}>
                        <i style={{ color: 'white', padding: '7px 3px' }} className="fa fa-user"></i>
                      </span>

                    </button>
 
                    {this.state.login ===true ?
                      <div className="dropdown-menu bg-light  " aria-labelledby="navbarDropdown">
                        <Link to="/UserProfile"> <button className="dropdown-item " >Profile</button></Link>
                        <Link to="/"> <button className="dropdown-item" href="#" onClick={this.handleLogout}>Logout</button></Link>
                      </div> 
                        :
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
    suggetions: state.navbarProducts.productdetails.product_details,
  };
  
  
}
const mapDispatchToProps = dispatch => {
  return {
    // suggetions: (payload) => dispatch(actions.getAllProduct(payload)),
    onGetNavProduct:(payload)=>dispatch(actions.getNavProduct(payload)),
    onSearch:(payload)=>dispatch(actions.getProductBySearchText(payload)),
    placeOrder:(payload)=>dispatch(actionss.placeOrder(payload)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
