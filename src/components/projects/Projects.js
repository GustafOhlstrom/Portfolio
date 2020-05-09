import './projects.scss'
import quizmasterMobile from '../../assets/images/quizmasterMobile.PNG'
import quizmasterDesktop from '../../assets/images/quizmasterDesktop4.PNG'
import React from 'react'

function Projects() {
    return (
        <div id="projects">
            <h1>Projects</h1>

            <div className="grid">
                <div className="project one">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                        <a href="http://quizmaster.gustafohlstrom.se/">Learn More</a>
                    </div>
                </div>
                <div className="project two">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                        <a href="http://quizmaster.gustafohlstrom.se/">Learn More</a>
                    </div>
                </div>
                <div className="project two">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                        <a href="http://quizmaster.gustafohlstrom.se/">Learn More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects