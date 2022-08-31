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
    description: "I searched for a code on React that implements a sticky-notes interface, then I improved it with image and datetime support a backend on NodeJS with a Mongo database. I deployed all the architecture on Heroku and MongoDB Atlas.", 
    tag: "stickies", 
    img: "https://i.ibb.co/Cbbqmrq/stickies.png",
    link: "https://sticky-minipancake.herokuapp.com/"
  },
  {
    name: "Battle Counter", 
    description: "Have you ever had the need of tracking how many bets you have won against someone? Well, I and a friend do. That is why I made a web site using React, NodeJS and MongoDB to keep this counter of points.", 
    tag: "battle_counter", 
    img: "https://i.ibb.co/M5KphDC/battle-counter.png",
    link: "https://battle-counter.herokuapp.com/"
  },
  {
    name: "Learning English", 
    description: "I am good at making READMEs because I love having good documentation near by. Do not believe me? Take a look to the Markdown website I use to write some Tips and tricks related to English language stuff.", 
    tag: "learning_english", 
    img: "https://i.ibb.co/K2drhd3/english-notes.png",
    link: "https://learning-english-joseda-eight.herokuapp.com/"
  },
  {
    name: "Refactor to C media application", 
    description: "The graduation project I made to get my degree was very challenging! I refactored a GStreamer Media server using C to join its two processes in a single one. I also explored the EGLSream mechanism to share between two processes the media info the application was producing. Wanna read it?", 
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
      I've worked some cool things on my own. You're welcome to take a look to my personal projects!
    </Typography>
    <br/>
    <h2>Projects on cloud</h2>
    <Typography variant="h6" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
      I've made some websites with practical reasons, that's why they're on cloud and available to public! 
      Since it's free, all of them are deployed on Heroku, but I've also deployed web pages, microservices and databases on Azure.
    </Typography>
    <Box sx={{ flexGrow: 1 }} style={{padding:25}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects_cards.map((project_info, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>

            <Card>
              <CardActionArea href={project_info.link}>
                <CardMedia
                  component="img"
                  height="140"
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
              </CardActionArea>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Box>

    <Box>
      <h2>Web Programming with Python and JavaScript by Harvard University</h2>
      <Typography variant="h6" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
        During pandemic (2020) I took a free course offered by Harvard University and it was great! 
        I was just starting my English studies and I got so much fun practicing while making cool projects using Python
        and its frameworks Flask and Django. There's some vanilla JavaScript involved there though.
      </Typography>
      <Typography variant="h5" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
        Take a look to the projects I made to get my certificate on this course!
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
