import React from 'react';
import styles from './Projects.module.css';
import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from "@mui/material";
import VideosCarousel from '../VideoCarousel/VideoCarousel';

const projects_cards = [
  {
    name: "Rockermind", 
    description: "Thanks to this project I got my certificate on Web Programming with Python and JavaScript by Harvard University. I used Django to build a social network for rock bands, fans and place owners.", 
    tag: "rockermind", 
    img: "https://i.ibb.co/S7KJgXn/rockermind.png",
    link: "https://fierce-earth-53714.herokuapp.com/rockermind/"
  },
  {
    name: "Stickies", 
    description: "I searched on GitHub some codes to get a sticky notes interface, then I improved it with support for images, datetime and a NodeJS backend with a Mongo database. I published all this architecture on Heroku and MongoDB Atlas.", 
    tag: "stickies", 
    img: "https://i.ibb.co/Cbbqmrq/stickies.png",
    link: "https://sticky-minipancake.herokuapp.com/"
  },
  {
    name: "Battle Counter", 
    description: "Have you ever had the need to track how many bets you have won against someone? Well, me and a friend do. That's why I made a website using React, NodeJS and MongoDB to keep this point counter.",
    tag: "battle_counter", 
    img: "https://i.ibb.co/M5KphDC/battle-counter.png",
    link: "https://battle-counter.onrender.com/"
  },
  {
    name: "Learning English", 
    description: "I'm good at making README files because I love having good documentation on hand. Don't believe me? Take a look at the Markdown website I made to write some tips and tricks related to the English language.", 
    tag: "learning_english", 
    img: "https://i.ibb.co/K2drhd3/english-notes.png",
    link: "https://learning-english-joseda-eight.onrender.com/"
  },
  {
    name: "Refactor to C media application", 
    description: "The graduation project I did to get my degree was very challenging! I refactored a GStreamer media server using C to merge its two processes into one. I also explored the EGLSream mechanism to share the multimedia information produced by the application between two processes. Do you want to read how my experience was when working for an NVIDIA partner?", 
    tag: "gstd", 
    img: "https://i.ibb.co/23DYFjs/tfg.png",
    link: "https://drive.google.com/file/d/1DH2ZSqaJ4McMMhGlTcL43OFhbXHswKfu/view"
  },
];

// var cs50w_videos = [
//   {
//       name: "Random Name #1",
//       description: "Probably the most random thing you have ever seen!"
//   },
//   {
//       name: "Random Name #2",
//       description: "Hello World!"
//   }
// ]

const Projects = () => (
  <div className={styles.Projects} id="projects" style={{ background: 'linear-gradient(to bottom, #90caf9, #FFFFFF' }}>
    <br/>
    <h1>Projects</h1>
    <Typography variant="h5" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
      I've worked on some cool things independently. You're welcome to take a look at my personal projects!
    </Typography>
    <br/>
    <h2>Projects on cloud</h2>
    <Typography variant="h6" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
      I've made some practical websites, that's why they're on cloud and available to the public! 
      Since it's free, all of them are deployed on Heroku, but I've also deployed web pages, microservices and databases on Azure.
    </Typography>
    <Box sx={{ flexGrow: 1 }} style={{padding:25}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects_cards.map((project_info, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardActionArea href={project_info.link} style={{minHeight: 300, height: "100%"}}>
              <Card style={{minHeight: 300, height: "100%"}}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project_info.img}
                    alt={project_info.tag}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project_info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project_info.description}
                    </Typography>
                  </CardContent>
              </Card>
            </CardActionArea>

          </Grid>
        ))}
      </Grid>
    </Box>

    <Box>
      <h2>Web Programming with Python and JavaScript by Harvard University</h2>
      <Typography variant="h6" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
        During the pandemic (2020) I took a free course offered by Harvard University, and it was great! 
        I was just starting my English studies, and I got so much fun practicing while making cool projects using Python
        and its frameworks Flask and Django. There's also some vanilla JavaScript involved.
      </Typography>
      <Typography variant="h5" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
        Take a look at the projects I made to get my certificate on this course!
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={10} key="0" style={{paddingLeft:25, paddingRight:25}}>
          <VideosCarousel/>
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default Projects;
