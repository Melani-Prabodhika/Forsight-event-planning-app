import React from 'react'
import {RiInstagramFill} from "react-icons/ri";
import{FaFacebookSquare,FaTwitterSquare,FaFile} from "react-icons/fa";

const Card = ({member}) => {
  return (
   <div className="slide-item">
      <div className="m-photo">
         <img src={member.img} alt={member.name} />
      </div>
      <div className="m-info">
         <div className="m-name">
            <p>{member.name}</p>
         </div>
         <div className="m-profession">
            <p>{member.profession}</p>
         </div>
         <div className="social-media">
            <ul>
               <li><a href={member.twitter} target='_blank' ><FaTwitterSquare/></a></li>
               <li><a href={member.insta} target='_blank' ><RiInstagramFill/></a></li>
               <li><a href={member.fb} target='_blank' ><FaFacebookSquare/></a></li>
            </ul>
         </div>
      </div>
   </div>
  )
}

export default Card