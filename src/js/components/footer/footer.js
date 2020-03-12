import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom'
import PDF from '../../../assets/Terms_and_Conditions.pdf'

function onResumeClick() {
  window.open(PDF);
}
function footer() {
  return (
    <div className="footer pt-5">
      <div className="footer-wrapper container ">
        <div className="row">
          <div className="col-lg-4">
            <div>
              <h5>About Company</h5>
              <p>
                NeoSOFT Technologies is here at your quick and easy service for
                shooping . Contact information Email: contact@neosofttech.com
                Phone: +91 0000000000 MUMBAI, INDIA
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <h5>Information</h5>
              <p>
              <a onClick={onResumeClick} >Terms and Conditions</a><br/>
              Gurantee and Return Policy<br/>
              Contact Us<br/>
              Privacy Policy<br/>
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
        <div className="row"><p>Copyright 2017 NeoSOFT Technologies All rights reserved | Design By Ameya Chandekar</p></div>
      </div>
    </div>
  );
}

export default footer;
