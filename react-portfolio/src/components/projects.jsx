import React from "react";
import EventsImage from "../assets/images/screencapture-Homepage.png";
import PassGen from "../assets/images/screencapture-PasswordGenerator.png";
import BackCover from "../assets/images/screencapture-Back-Cover.png";


function Projects () {
    return (
        <section id="projects">
        <div className="project-container">
            <h2>Projects</h2>
            <p className="content">Below you will find github links to two collaborative projects called Event Masters Uk and The Back Cover. Plus a class assignment called password Generator.</p>
            <div className="images-container">
                <div><img src={EventsImage} alt="Event-Masters-UK homepage"/>
                    <h2> Project 1</h2>
                    <p> an interactive application with data retreived from two third party open APIs on the browser. It allows for the user to search events for a city within the UK restricted by location.</p>
                    <a href="https://github.com/samira0101/Event-Masters-UK"> Link to project 1 </a>
                </div> 
                <div><img src={PassGen} alt="password generator homepage"/>
                    <h2> Password generator</h2>
                    <p> This was my very first assignment in which required javascript functions. </p>
                    <a href="https://github.com/samira0101/passwordGenerator"> Link to password generator </a>
                </div> 
                <div><img src={BackCover} alt="BackCover homepage"/>
                        <h2> Project 3 </h2>
                        <p> A platform to use as a virtual back cover, where the user cantrack the books they want to read and see what other people think about</p>
                        <a href="https://github.com/LanguageBytes/The-Back-Cover"> Link to The Back Cover </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects 