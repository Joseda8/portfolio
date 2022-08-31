import * as React from 'react';
import { Card, Grid, Typography } from "@mui/material";
import DataObjectIcon from '@mui/icons-material/DataObject';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function SkillsSet() {
  return (
    <div id="skill_set" style={{paddingLeft: 25, paddingRight: 25}}>
      <Card style={{paddingTop: 10}}>
        <h1 style={{ color: '#1976d2' }}>My skill set</h1>
        <br/>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>

          <Card style={{height: 575}}>
              <br/>
              <DataObjectIcon fontSize="large" color="primary" />
              <br/>
              <Typography variant="h5" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Development
              </Typography>
              <Typography variant="body1" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                I have worked in frontend and backend with many languages and frameworks.
              </Typography>
              <br/>
              <Typography variant="h6" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Frontend
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                ReactJS, Angular.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                HTML, JavaScript, CSS, Saas, Jinja.
              </Typography>

              <br/>
              <Typography variant="h6" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Backend
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Python (Django, Flask), Rust (Rocket), NodeJS (ExpressJS), C/C++, Keycloak, GStreamer, Git.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                HTTP and MQTT.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                SQL, PostgreSQL, MySQL. MongoDB, Neo4j, Redis.
              </Typography>
            </Card>

          </Grid>
          <Grid item xs={4}>

          <Card style={{height: 575}}>
              <br/>
              <RocketLaunchIcon fontSize="large" color="primary" />
              <br/>
              <Typography variant="h5" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Deployment and building
              </Typography>
              <Typography variant="body1" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                I have worked deploying software that I or someone else made.
              </Typography>
              <br/>
              <Typography variant="h6" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Deployment
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Heroku and Azure services.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Linux (Fedora CoreOS) and Windows (IIS).
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Arduino, FPGA, NVIDIA Jetson, Raspberry pi 3/4.
              </Typography>
              <br/>

              <Typography variant="h6" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Containerization and building
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Docker, Podman, K3s, RPMs.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Jenkins, Postman.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Meson and Autotools.
              </Typography>
            </Card>

          </Grid>
          <Grid item xs={4}>

          <Card style={{height: 575}}>
              <br/>
              <LightbulbIcon fontSize="large" color="primary" />
              <br/>
              <Typography variant="h5" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Other knowledge
              </Typography>
              <Typography variant="body1" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                From my hobbies and others I have developed some additional skills.
              </Typography>
              <br/>
              <Typography variant="h6" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Management
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Agile and sequential methodologies (SCRUM, Extreme Programming, Waterfall, V model, etc).
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Requirements engineering, UML, C4.
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Microsoft Office and Google Drive services.
              </Typography>

              <br/>
              <Typography variant="h6" color="primary" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Other engineering areas
              </Typography>
              <Typography variant="body2" color="inherit" component="div" align="center" paragraph="true" style={{ marginLeft:"5%", marginRight:"5%" }}>
                Artificial intelligence, electronics digital and analogue, physics.
              </Typography>
            </Card>

          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
