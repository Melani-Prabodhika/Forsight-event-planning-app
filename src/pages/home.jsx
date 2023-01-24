import React from "react";
import Events from "../assets/data/events";


 const Home = () => {
   return(

      // Page body start
      <div className="home">

         {/* Main Feature */}
         <div className="intro">
            <div className="intro-image">
               <img src="" alt=""/>
            </div>
            {/* <div className="intro-video">
            </div> */}
            <div className="intro-text">
               <h1 className="title"><span><strong>Main Title</strong> </span> </h1>
               <div className="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </div> 
            </div>
         </div>
         {/* End Main feature */}

         {/* Upcoming events */}
         <div className="events">
            <div className="container">
               <div className="title">
                  <h2>Upcoming <strong>Events</strong></h2>
               </div>
               <div className="content">
                  {Events.map(event => (
                     <div key={event.id} className="slide-item">
                        <img src={event.img} alt={event.id}/>
                     </div>
                  ))}                 
               </div>
               <div className="toggle">
                  <div className="toggle-1"><span></span></div>
                  <div className="toggle-2"><span></span></div>
               </div>
            </div>
         </div>
      {/* End Upcoming events */}

      {/* Major event */}
      <div className="major-event">
         <div className="container">
            <div className="title">
               <h2>Major <strong>Event</strong></h2>
            </div>
            <div className="event-img">
               <img src={require("../assets/img/Major event image.png")} alt='event'/>
            </div>
            <div className="text-area">
               <div className="title-text">
                  <h3>Wide Open</h3>
               </div>
               <div className="text-content">
                  <p>“Wide open" was the idea of our director, who targeted the guardians and parents of down syndrome children or relatives. It was an unforgettable important milestone for our company that lasted for five days of a full-time schedule. Keep your eyes wide and open!.</p>
               </div>
            </div>
         </div>
      </div>
      {/* End Major event */}

      </div>
      // End Page body

   );
 }

 export default Home;