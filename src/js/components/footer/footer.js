import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom'
import PDF from '../../../assets/Terms_and_Conditions.pdf'
import pdf from '../../../assets/Guarantee_ReturnPolicy.pdf'
function onResumeClick() {
  window.open(PDF);
}
function footer() {
  return (
    <div className="footer pt-5 "  style={{fontSize:"12px",fontWeight:500}}>
      <div className="footer-wrapper container ">
        <div className="row">
          <div className="col-lg-4">
            <div>
              <h5 className="text-center">About Company</h5>
              <p className="text-center"> 
                NeoSOFT Technologies is here at your quick and<br/> easy service for
                shooping . <br/>Contact information<br/> Email: contact@neosofttech.com<br/>
                Phone: +91 0000000000 <br/>MUMBAI, INDIA
                </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <h5>Information</h5>
              <p>
              <a href="#" onClick={onResumeClick} >Terms and Conditions</a><br/>
             <a href={pdf} target="_blank" > Gurantee and Return Policy</a><br/>
             <Link to="/ContactUs">< a > Contact Us</a></Link><br/>
              <a href="#">Privacy Policy</a><br/>
              <Link to="/LocateUs">Locate Us</Link>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <h5>NewsLetter</h5>
              <p>Signup to get exclusive offer from our favorite brands and to be well up in the news<br></br>
              <input  id="subscribeText" placeholder="your email..." type="text" className=""></input><br></br>
              <button className="btn btn-light">Subscribe</button>
              </p>
              
              
              <p></p>
            </div>
          </div>
        </div>
        <div className="row "> <div className="col-12 text-center"><p > Copyright 2017 NeoSOFT Technologies All rights reserved | Design By Ameya Chandekar</p></div></div>
      </div> 
    </div>
  );
}

export default footer;
