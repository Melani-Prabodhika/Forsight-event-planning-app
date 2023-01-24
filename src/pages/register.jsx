import React from "react";
import {Link} from 'react-router-dom';
import {FaLongArrowAltLeft} from "react-icons/fa";

const Register = () => {
   return(

      // Page body start
      <div className="register">

         {/* Header top */}
         <div className="header-top">
            <div className="container"></div>
         {/* End Header top */}

         {/* Header banner start */}
            <div className="nav-area"></div>
            <div className="b-wrapper">
               <div className="banner-top">
                  <img src={''} alt={''}/>
                  <h1>Register</h1>
               </div>
               <div className="banner-bottom">
                  <Link to={'/'}>Home</Link><i> / </i>Register
               </div>
            </div>
         </div>
          {/* End Header banner */}
         
         <div className="l-wrapper">
            <div className="container">

               {/* Registration form */}
               <div className="l-left">
               <img src="" alt=""/>
                  <div className="form">
                     <form>
                        <div className="form-image">
                           <img src="" alt=""/>
                        </div>
                        <div className="form-input">
                           <input name="name" type="text" placeholder="Name"/>
                           <input name="username" type="text" placeholder="Preffered Username"/>
                           <input name="password" type="password" placeholder="Password"/>
                           <input name="email" type="email" placeholder="Email"/>
                           <button type="submit" name="submit">Register</button>
                        </div>
                     </form>
                  </div>
               </div>
               {/* End Registration form */}

               {/* Text area */}
               <div className="l-right">
                  <div className="text-area">
                     <div className="title">
                        <h2>Join now</h2>
                     </div>
                     <div className="text">
                        <label>Have an account?</label>
                     </div>
                     <div className="button">
                        <div className="login-button">
                           <Link to={'/#'}><span><FaLongArrowAltLeft/>Login Here</span></Link>
                        </div>
                     </div>
                  </div>
               </div>
               {/* End Text area */}

            </div>
         </div>
      </div>
      //End Page body

   );
}

export default Register