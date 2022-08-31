import React from 'react';
import styles from './AboutMe.module.css';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function zoom_in(e) {
  e.target.style.transform = "scale(2)";
e.target.style.transition = "transform .2s";
}

function zoom_out(e) {
  e.target.style.transform = "scale(1.0)";
}

const AboutMe = () => (
  <div className={styles.AboutMe} id="about_me">
    <h1 >About me</h1>
    <h2>I'm José Daniel! Greetings from Costa Rica.</h2>
    <Typography variant="h5" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
    I am passionate about the environment, urban mobility, physics and entrepreneurship. So, a full stack developer using web technologies 
    in any of these fields, is my dream job.
    </Typography>
    <br/>
    <img
      src='https://i.ibb.co/943JHfG/about-me-profile.png'
      alt='profile'
      width='200vw'
      onMouseOver={zoom_in} onMouseOut={zoom_out}
    />
  </div>
);

export default AboutMe;
