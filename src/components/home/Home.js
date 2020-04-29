import './home.scss'
import quizmasterMobile from '../../assets/images/quizmasterMobile.PNG'
import quizmasterDesktop from '../../assets/images/quizmasterDesktop4.PNG'
import React from 'react'

function Home() {
    return (
        <div id="home">
            <h1>Featured Projects</h1>

            <div className="grid">
                <div className="project one">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                    <ul className="project-tags">
                        <li>React</li>
                        <li>JSX</li>
                        <li>SASS</li>
                        <li>Firebase</li>
                    </ul>
                    
                </div>
                <div className="project two">
                    <img className="project-img" src={quizmasterDesktop} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home