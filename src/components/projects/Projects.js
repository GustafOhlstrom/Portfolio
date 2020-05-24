import './projects.scss'
import quizmasterDesktop from '../../assets/images/test2.png'
import test3 from '../../assets/images/test3.png'
import React from 'react'

function Projects() {
    return (
        <section id="projects">
            <h3>Projects</h3>

            <div className="grid">
                
                <a className="project" href="http://quizmaster.gustafohlstrom.se/">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                    </div>
                </a>

                <a className="project" href="http://typingspeed.gustafohlstrom.se/">
                    <img className="project-img" src={test3} alt=""/>
                    <div className="project-info">
                        <h2>Typing Speed</h2>
                        <p>React JS, SASS</p>
                    </div>
                </a>

                <a className="project" href="http://quizmaster.gustafohlstrom.se/">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                    </div>
                </a>

                <a className="project" href="http://typingspeed.gustafohlstrom.se/">
                    <img className="project-img" src={test3} alt=""/>
                    <div className="project-info">
                        <h2>Typing Speed</h2>
                        <p>React JS, SASS</p>
                    </div>
                </a>

                <a className="project" href="http://quizmaster.gustafohlstrom.se/">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                    </div>
                </a>
            
            </div>
        </section>
    )
}

export default Projects