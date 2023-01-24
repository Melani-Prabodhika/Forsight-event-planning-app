import React from "react";
import {Link} from 'react-router-dom';
import {RiNumber1} from 'react-icons/ri';
import {FaPhoneAlt,FaEnvelope} from 'react-icons/fa';
import {MdHeadset} from 'react-icons/md';
import Gallery from "../assets/data/gallery";
import Partners from "../assets/data/partners";
  
const About = () => {
   return(

   // page body start
   <div className="about">

      {/* Header top */}
      <div className="header-top">
         <div className="container"></div>
      {/* End Header top */}

      {/* Header banner start */}
         <div className="nav-area"></div>
         <div className="b-wrapper">
            <div className="banner-top">
               <img src={''} alt={''}/>
               <h1>About Us</h1>
            </div>
            <div className="banner-bottom">
            <Link to={'/'}>Home</Link><i> / </i>About Us
            </div>
         </div>
      </div>
      {/* End Header banner */}

      {/* Features area */}
      <div className="tab">
         <div className="container">
            <img src={''} alt={''}/>
            <div className="tab-wrap">
               <div className="tab-left">
                  <div className="tab-content">
                     <img src={''} alt={''}/>
                  </div>
               </div>
               <div className="tab-right">
                  <div className="feature">
                     <Link to={'/#'}>
                        <div className="number"><RiNumber1/></div>Creativity
                     </Link>
                  </div> 
               </div>
            </div>
         </div>
      </div>
      {/* End Features area */}

      {/* Start Gallery */}
      <div className="gallery">
         <div className="container">
            <div className="title">
               <h2>Gallery</h2>
            </div>
            <div className="content">
               {Gallery.map((image,index) => (
                  <div key={index} className="slide-item">
                     <img src={image} alt={index}/>
                  </div>
               ))}
            </div>
            <div className="toggle">
               <div className="toggle-1"><span></span></div>
               <div className="toggle-2"><span></span></div>
            </div>
         </div>
      </div>
      {/* End Gallery */}

      {/* Sponsors section start */}
      <div className="partner">
         <div className="container">
            <div className="title">
               <h2>Our <strong>Partners</strong></h2>
            </div>
            <div className="card">
               {Partners.map(partner => (
                  <div key={partner.id} className="card-item">
                     <img src={partner.img} alt={partner.name}/>
                  </div>
               ))}
            </div>
         </div>
      </div>
      {/* End Sponsors section */}

      {/* Contact section */}
      <div className="contact-area">
         <div className="container">
            <div className="map-area">
               
            </div>
            <div className="info">
               <div className="title">
                  <h3>Contact us</h3>
               </div>
               <div className="content">
                  <ul>
                     <li><FaPhoneAlt/><span>0771234561</span></li>
                     <li><MdHeadset/><span>0111234561</span></li>
                     <li><FaEnvelope/><span>fjevents@gmail.com</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      {/* End Contact section */}

   </div>
   // End page body

   );
}

export default About