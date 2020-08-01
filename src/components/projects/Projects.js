import './projects.scss'
import killTheVirus from '../../assets/images/kill-the-virus.png'
import quizzes from '../../assets/images/quizes.png'
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
                        <p className="project-tags">Socket.io, Node, Express, React JS, SASS</p>
                        <p className="project-description">A realtime reaction based game that puts two opponents in a head to head. The one who can kill the virus the fastest wins.</p>
                    </div>
                </a>
                
                <a className="project" href="http://quizzes.gustafohlstrom.se/">
                    <img className="project-img" src={quizzes} alt="Quiz Website"/>
                    <div className="project-info">
                        <h2>Quizzes</h2>
                        <p className="project-tags">React JS, SASS, Firebase</p>
                        <p className="project-description">Create and take quizzes with any amount of correct answers and points.</p>
                    </div>
                </a>

                <a className="project" href="http://typingspeed.gustafohlstrom.se/">
                    <img className="project-img" src={typingSpeed} alt="Typing Speed Test Website"/>
                    <div className="project-info">
                        <h2>Typing Speed</h2>
                        <p className="project-tags">React JS, SASS</p>
                        <p className="project-description">Test how fast you can type.</p>
                    </div>
                </a>

            </div>
        </section>
    )
}

export default Projects