import './projects.scss'
import killTheVirus from '../../assets/images/kill-the-virus.png'
import quizes from '../../assets/images/quizes.png'
import typingSpeed from '../../assets/images/typing-speed.png'
import React from 'react'

function Projects() {
    return (
        <section id="projects">
            <h3>Projects</h3>

            <div className="grid">

                <a className="project" href="http://kill-the-virus.gustafohlstrom.se/">
                    <img className="project-img" src={killTheVirus} alt="Kill The Virus Website"/>
                    <div className="project-info">
                        <h2>Kill The Virus</h2>
                        <p>Socket.io, Node, Express, React JS, SASS</p>
                    </div>
                </a>
                
                <a className="project" href="http://quizes.gustafohlstrom.se/">
                    <img className="project-img" src={quizes} alt="Quiz Website"/>
                    <div className="project-info">
                        <h2>Quizes</h2>
                        <p>React JS, SASS, Firebase</p>
                    </div>
                </a>

                <a className="project" href="http://typingspeed.gustafohlstrom.se/">
                    <img className="project-img" src={typingSpeed} alt="Typing Speed Test Website"/>
                    <div className="project-info">
                        <h2>Typing Speed</h2>
                        <p>React JS, SASS</p>
                    </div>
                </a>

            </div>
        </section>
    )
}

export default Projects