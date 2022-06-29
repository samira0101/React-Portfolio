import React from "react";
import EventsImage from "../assets/images/screencapture-Homepage.png";
import PassGen from "../assets/images/screencapture-PasswordGenerator.png";
import ThirdPartyApi from "../assets/images/screencapture-Third-Party-API.png";


function Projects () {
    return (
        <section id="projects">
        <div className="project-container">
            <h2>Projects</h2>
            <p className="content">Below you will find github links to one collaborative project with other students in the class called Event Masters Uk. Plus two class assignments a password generator and the first assignment given at the start of the course. </p>
            <div className="images-container">
                <div><img src={EventsImage} alt="Event-Masters-UK homepage"/>
                    <h2> Project 1</h2>
                    <p> This was the very first project that I worked on collaboratively with two other students. We have just finished Phase one which was the front content of web development and created a platform called Event-Masters-uk. </p>
                    <a href="https://github.com/samira0101/Event-Masters-UK"> Link to project 1 </a>
                </div> 
                <div><img src={PassGen} alt="password generator homepage"/>
                    <h2> Password generator</h2>
                    <p> This was my very first assignment in which required javascript functions. </p>
                    <a href="https://github.com/samira0101/passwordGenerator"> Link to password generator </a>
                </div> 
                <div><img src={ThirdPartyApi} alt="calender homepage"/>
                        <h2> Calender </h2>
                        <p>  A simple calender with given pre-code but added feutures such as Jquery and JavaScript to make it interactive.</p>
                        <a href="https://github.com/samira0101/Third-Party-APIs-Calender"> Link to calender </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects 