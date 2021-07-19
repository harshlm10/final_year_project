import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="heading-container">
                <h1>Human Pose Estimation & Correction</h1>
            </div>
            <div className="banner-container">
                <img src="./assets/excercisebanner.jpg" alt="Banner" width="1500px" height="600px"></img>
            </div>
            <div className="pose-container">
                <div className="poseheading-container" align="center"><h1>Choose your POSE</h1></div>
                <div className="poseoption-container">
                    <div className="plank-container" align="center">
                        <Link to={{
                            pathname: '/excercise',
                            state: { name: "PLANK" }
                        }}>
                            <div>
                                <img src="./assets/Plank.jpg" alt="Plank" width="300px" height="350px"></img>
                            </div>
                            <div>
                                <h2>Plank</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="bicepcurl-container" align="center">
                        <Link to={{
                            pathname: '/excercise',
                            state: { name: "BICEP CURL" }
                        }}>
                            <div>
                                <img src="./assets/Bicep_curl.jpg" alt="" width="300px" height="350px"></img>
                            </div>
                            <div>
                                <h2>Bicep Curl</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="squats-container" align="center">
                        <Link to={{
                            pathname: '/excercise',
                            state: { name: "SQUATS" }
                        }}>
                            <div>
                                <img src="./assets/Squats.jpg" alt="" width="300px" height="350px"></img>
                            </div>
                            <div>
                                <h2>Squats</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="suryanamaskar-container" align="center">
                        <Link to={{
                            pathname: '/excercise',
                            state: { name: "SURYA NAMASKAR" }
                        }}>
                            <div>
                                <img src="./assets/surya_namaskar.jpg" alt="" width="300px" height="350px"></img>
                            </div>
                            <div>
                                <h2>Surya Namaskar</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="halfmoon-container" align="center">
                        <Link to={{
                            pathname: '/excercise',
                            state: { name: "HALF-MOON POSE" }
                        }}>
                            <div>
                                <img src="./assets/half_moon_pose.jpg" alt="" width="300px" height="350px"></img>
                            </div>
                            <div>
                                <h2>Half-Moon Pose</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home