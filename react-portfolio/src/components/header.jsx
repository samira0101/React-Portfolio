import React from "react";
import profileImage from "../assets/images/screencapture-Samira.png";


function Header () {
    return (
      <>
  <div className="banner-image">
  <div className="banner-image-container">
      <div className="profile-image"></div>
      <img className="profile-image" src={profileImage} alt="Samira's Profile" /> 
      <div className="intro-content">
      <h1> <strong > Samira Hirsi </strong> </h1>    
      <p className="intro"> Full Stack Junior Developer </p>
       <a href="www.linkedin.com/in/samira-hirsi-4609131a8/" className="fa fa-linkedin"> </a>
            <a href="https://github.com/samira0101" className="fa fa-github" > </a>
      <button className="btn"> <a className="cv-link" href="https://drive.google.com/file/d/1hAh4UOcINdaPY-_GVKr5isErJNJtDsS_/view?usp=sharing">CV </a></button>
      
      </div>
  </div>
</div>
 {/* <div className="socials"/>
 <div>
 <a href="www.linkedin.com/in/samira-hirsi-4609131a8/" class="fa fa-linkedin"></a>
            <a href="https://github.com/samira0101" class="fa fa-github" style="font-size:36px"></a>
            </div> */}
            </>
)
}
export default Header