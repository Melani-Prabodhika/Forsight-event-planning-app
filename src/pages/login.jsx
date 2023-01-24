import React from "react";
import {Link} from 'react-router-dom';
import {FaLongArrowAltRight} from "react-icons/fa";

const Login = () => {
   return(

      // Page body start
      <div className="login">

         {/* Header top */}
         <div className="header-top">
            <div className="container"></div>
         {/* End Header top */}

         {/* Header banner start */}
            <div className="nav-area"></div>
            <div className="b-wrapper">
               <div className="banner-top">
                  <img src={''} alt={''}/>
                  <h1>Login</h1>
               </div>
               <div className="banner-bottom">
                  <Link to={'/'}>Home</Link><i> / </i>Login
               </div>
            </div>
         </div>
         {/* End Header banner */}
         
         <div className="l-wrapper">
            <div className="container">

               {/* Text area */}
               <div className="l-left">
                  <div className="text-area">
                     <div className="title">
                        <h2>Welcome back</h2>
                     </div>
                     <div className="text">
                        <label>Need to sign up</label>
                     </div>
                     <div className="button">
                        <div className="sign-up-button">
                           <Link to={'/#'}><span><FaLongArrowAltRight/>Sign Up Here</span></Link>
                        </div>
                     </div>
                  </div>
               </div>
               {/* End Text area */}

               {/* Login form */}
               <div className="l-right">
                  <img src="" alt=""/>
                  <div className="form">
                     <form>
                        <div className="form-image">
                           <img src="" alt=""/>
                        </div>
                        <div className="form-input">
                           <input name="username" type="text" placeholder="Username"/>
                           <input name="password" type="password" placeholder="Password"/>
                           <Link to={'/#'}><span>Forgot username or password?</span></Link>
                           <button type="submit" name="submit">Login</button>
                        </div>
                     </form>
                  </div>
               </div>
               {/* End Login form */}

            </div>
         </div>
      </div>
      // End page body

   );
}

export default Login