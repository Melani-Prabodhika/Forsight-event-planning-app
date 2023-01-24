import React from "react";
import {Link} from 'react-router-dom';
import {FaSearch} from "react-icons/fa";

const Navbar = () => {
   return(

      // Header start
      <div className="n-wrapper">

         {/* Logo area */}
         <div className="n-left">
            <Link to={'/'} >
               <div className="logo-area">
                  <img src={''} alt={''}/>
                  <label>Forsight</label>
               </div>
            </Link>
         </div>
         {/* End Logo area */}

         <div className="n-right">

            {/* Navigation menu */}
            <div className="nav-menu">
               <nav>
                  <ul>
                     <li><Link to={'/'} >Home</Link></li>
                     <li><Link to={'/about'} >About Us</Link></li>
                     <li><Link to={'/contact'} >Contact Us</Link></li>
                     <li><Link to={'/login'} >Login</Link></li>
                     <li><Link to={'/register'} >Register</Link></li>
                  </ul>
               </nav>
            </div>
            {/* End Navigation menu */}

            {/* Start Search area */}
            <div className="search-area">
               <div className="search-box">
                  <form>
                     <input className="search-text" type="text" placeholder="Search Here..."/>
                     <div lassName="search-button">
                     <Link to={'/#'}><i className="search-icon" aria-hidden="true"><FaSearch/></i></Link>
                     </div>
                  </form>
               </div>
            </div>
            {/* End Search area */}

         </div>   
      </div>
      // End Header
      
   );
}

export default Navbar