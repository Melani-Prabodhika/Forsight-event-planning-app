import React from "react";
import {Link} from 'react-router-dom';
import {RiInstagramFill} from "react-icons/ri";
import{FaFacebookSquare,FaTwitterSquare,FaFile} from "react-icons/fa";
import Members from "../assets/data/members";
import Card from "../component/card/card";

const Contact = () => {

   const Topics = [
      'Booking details' ,
      'Make placements',
      'Event ajustments',
      'Event organization' ,
      'Evaluation' ,
      'Event ideas' ,
      'Time manage' ,
      'Payments'
   ]

   const membersElement = Members.map(member => (
      <Card key={member.id} member={member} />
   ))

   return(

      // page body start
      <div className="contact">

         {/* Header top */}
         <div className="header-top">
            <div className="container"></div>
         {/* End Header top */}

         {/* Header banner start */}
            <div className="nav-area"></div>
            <div className="b-wrapper">
               <div className="banner-top">
                  <img src={''} alt={''}/>
                  <h1>Contact Us</h1>
               </div>
               <div className="banner-bottom">
                  <Link to={'/'}>Home</Link><i> / </i>Contact Us
               </div>
            </div>
         </div>
         {/* End Header banner */}

         <div className="wrapper">
            <div className="container">

               {/* Contact form section */}
               <div className="c-left">
                  <div className="title">
                     <h2>Get in Touch!</h2>
                  </div>
                  <div className="form">
                     <form>
                        <input name="name" type="text" placeholder="Name"/>
                        <input name="email" type="email" placeholder="Email"/>
                        <input name="company" type="text" placeholder="Company"/>
                        <input name="phone" type="text" placeholder="Contact No"/>
                        <textarea name="message" type="text" placeholder="What do you want to know"/>
                        <button type="submit" name="submit">Submit</button>
                     </form>
                  </div>
               </div>
               {/* End Contact form section */}

               {/* Our team members section */}
               <div className="c-right">
                  <div className="team">
                     <div className="title">
                        <h2>Meet our <strong>Team members</strong></h2>
                     </div>
                     <div className="content">
                        {membersElement}
                     </div>
                     <div className="toggle">
                        <div className="toggle-1"><span></span></div>
                        <div className="toggle-2"><span></span></div>
                     </div>
                  </div>
                  {/* End Our team members section */}

                  {/* Start Services */}
                  <div className="list">
                     <div className="title">
                        <h3>How can we assist you</h3>
                     </div>
                     <div className="list-item">
                        <ul>
                           {Topics.map((topic, index) => (
                              <li key={index} ><FaFile/><i className="item"><Link to={'/#'}>{topic}</Link></i></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               {/* End Services */}

            </div>
         </div>
      </div>
      // End page body

   );
}

export default Contact