import React from "react";
import {Link} from 'react-router-dom';
import {FaGoogle,FaFacebook,FaTwitter,FaYoutube,FaPhoneAlt,FaEnvelope} from "react-icons/fa"

const Footer = () => {
   return(

      // Footer start
      <div className="f-wrapper">
         <div className="footer-top">

            {/* Company description */}
            <div className="f-left">
               <div className="info">
                  <div className="logo-area">
                     <div className="logo"><img src={''} alt={''}/></div>
                     <label>Forsight</label>
                  </div>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  <ul>
                     <li><span><FaPhoneAlt/>0771234561</span></li>
                     <li><span><FaEnvelope/>fjevents@gmail.com</span></li>
                  </ul>
               </div>
            </div>
            {/* End Company description */}

            <div className="f-right">

               {/* Support links */}
               <div className="quick-links">
                  <div className="title">
                     <h3>Quick Links</h3>
                  </div>
                  <ul>
                     <li><Link to={'/'}> Home</Link></li>
                     <li><Link to={'/about'}> About Us</Link></li>
                     <li><Link to={'/contact'}> Contact Us</Link></li>
                  </ul>
               </div>
               {/* End Support links */}

               {/* Social Media section */}
               <div className="social-media">
                  <div className="title">
                     <h3>Follow Us</h3>
                  </div>
                  <ul>
                     <li><FaGoogle/><span>www.google.com</span></li>
                     <li><FaFacebook/><span>www.facebook.com</span></li>
                     <li><FaTwitter/><span>www.twitter.com</span></li>
                     <li><FaYoutube/><span>https://youtu.be/nw6UHv6F7VU</span></li>
                  </ul>
               </div>
               {/* End Social Media section */}

            </div>
         </div>
         
         {/* Copyright section */}
         <div className="footer-bottom">
            <div className="copy-right-area">
               <div className="copy-right">
                  <p>©2023 by company name</p>
               </div>
            </div>
         </div>
         {/* End Copyright section  */}

      </div>
      // End Footer

   );
}

export default Footer