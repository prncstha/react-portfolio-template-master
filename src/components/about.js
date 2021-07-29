import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1 style={{ color: '#0052CC' }}>About Us</h1>
            </Fade>
            <p>
            <br></br>
            <Fade fadeInUp>
              <h2>{data.aboutParaOne}</h2>
              </Fade>
              {/* <br></br>
              <br></br> */}
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              <h2>{data.aboutParaThree}</h2>
              {data.aboutParaFour}
              <br></br>
              <br></br>
              <h2>{data.aboutParaFive}</h2>
              {data.aboutParaSix}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" align="right"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
