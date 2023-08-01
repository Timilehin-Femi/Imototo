import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { DropDownItems } from "./pages/DropDownItems";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-padding">
        <div className="footer-box">
          <div className="footer-box-social ">
            <img
              src="./images/imototo3.png"
              className=" footer-logo"
              alt="footer logo"
              height="150px"
              width="200px"
            ></img> 
           <div className="footer-social-info">
           <p>
              Imototo is a website that focuses on healthy ecosystem through
              collection and proper disposal of waste. it seeks in the long run
              to bring about waste recycling.
            </p>
           </div>
            <div className="footer-social">
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="http://twitter.com/babynursea">
                <i className="fa-brands fa-twitter" />
              </a>

              <a href="https://instagram.com/_babynursea_?igshid=NTc4MTIwNjQ2YQ==">
                <i className="fa-brands fa-instagram" />
              </a>

              <a href="www.linkedin.com/in/precious-anjorin-17b82420b">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>

          <div className="footer-div-links">
            <h4>Our Services</h4>

            <ul>
              <li>
                <a href="/waste-pick-up">Waste pick up</a>
              </li>
              <li>
                <a href="/recycle">Recycling</a>
              </li>
              <li>
                <a href="/dumpsite-locations">Dumpsite locations </a>
              </li>
              <li>
                <a href="/imw">ImW Shop</a>
              </li>
            </ul>
          </div>

          <div className="footer-div-links">
            <h4>Help Center</h4>

            <ul>
              <li>
                <a href="/services" >FAQs</a>
              </li>
              <li>
                <a href="/services" >Contact us</a>
              </li>
              <li>
                <a href="/services" >Testimonials</a>
              </li>
              <li>
                <a href="/services" >What to do next?</a>
              </li>
            </ul>
          </div>

          <div className="footer-div-links">
            <h4>Our Partners</h4>

            <ul>
              <li>
                <a href="www.ekitistate.gov.ng/executive-council/mdas/waste-management-board/">The Ekiti State Government</a>
              </li>
              <li>
                <a href="/waste-pick-up">Recyclying Companies</a>
              </li>
              <li>
                <a href="/waste-pick-up">Environmetalists</a>
              </li>
              <li>
                <a href="/waste-pick-up">private Truck Owners</a>
              </li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h4>Newsletter</h4>

            <div className="subscribe-box">
              <input type="emai" placeholder="enter your email" />
              <i className="fa-regular fa-paper-plane" />
            </div>

            <div className="subscribe-box-info">
              <p>Subscribe to our weekly newsletter</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-below">
        <div className="footer-copyright">
          <p>@{new Date().getFullYear()} imototo. All right reserved</p>
        </div>
        <div className="footer-below-links">
          <a href="">
            <p>Terms & Condition</p>
          </a>
          <a href="">
            <p>Security</p>
          </a>
          <a href="">
            <p>Privacy</p>
          </a>
          <a href="">
            <p>Cookie Declaration</p>
          </a>
        </div>
      </div>
    </div>
  );
}
