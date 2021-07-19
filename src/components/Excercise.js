import React, { useEffect } from 'react'
import '../styles/excercise.css'

const Excercise = (props) => {
  const ExcerciseName = props.location.state.name

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "Estimate.js";
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="excercise-container">
      <div className="heading-container">
        <h1 align="center">{ExcerciseName}</h1>
      </div>
      <div className="camera-container">
        <div>
          <div className="left-cam-container"><video className="input_video left-cam"></video></div>
          <div style={{
            marginTop: "30px",
            width: "125px"
          }}>
          <h2>Please thake the initial position as ashown in the below image, say ready out loud once done</h2>
          {ExcerciseName==="SQUATS" ? <img src="./assets/Squats.jpg" alt="pose position" width="125px" height="130px"></img>: null}
          {ExcerciseName==="PLANK" ? <img src="./assets/Plank.jpg" alt="pose position" width="125px" height="130px"></img>: null}
          {ExcerciseName==="BICEP CURL" ? <img src="./assets/Bicep_curl.jpg" alt="pose position" width="125px" height="130px"></img>: null}
          {ExcerciseName==="SURYA NAMASKAR" ? <img src="./assets/surya_namaskar.jpg" alt="pose position" width="125px" height="130px"></img>: null}
          {ExcerciseName==="HALF-MOON POSE" ? <img src="./assets/half_moon_pose.jpg" alt="pose position" width="125px" height="130px"></img>: null}
          </div>
        </div>
        <div className="right-cam-container"><canvas className="output_canvas" width="1350px" height="650px"></canvas></div>
        </div>    
    </div>
  )
}

export default Excercise