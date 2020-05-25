import './projects.scss'
import quizmaster from '../../assets/images/quizmaster.png'
import typingSpeed from '../../assets/images/typing-speed.png'
import React from 'react'

function Projects() {
    return (
        <section id="projects">
            <h3>Projects</h3>

            <div className="grid">
                
                <a className="project" href="http://quizmaster.gustafohlstrom.se/">
                    <img className="project-img" src={quizmaster} alt=""/>
                    <div className="project-info">
                        <h2>Quizmaster</h2>
                        <p>React JS, SASS, Firebase</p>
                    </div>
                </a>

                <a className="project" href="http://typingspeed.gustafohlstrom.se/">
                    <img className="project-img" src={typingSpeed} alt=""/>
                    <div className="project-info">
                        <h2>Typing Speed</h2>
                        <p>React JS, SASS</p>
                    </div>
                </a>

                <div className="project more-projects" href="http://typingspeed.gustafohlstrom.se/">
                    <p>More projects coming soon</p>
                </div>
            
            </div>
        </section>
    )
}

export default Projects