import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';

const Item = styled('div')({
  color: 'white',
  textAlign: 'center',
});

function Copyright() {
  return (
    <Typography variant="body2" color="#FFF" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://portfolio-jose-montoya.herokuapp.com/">
        JDMS Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => 
  <>
    <Box style={{position:'fixed', left:0, bottom:0, right:0, backgroundColor: "#1A2027" }}>
        <Grid container spacing={0} style={{padding: 30}}>
          <Grid item xs={6}>
            <Item>Made by José Daniel Montoya Salazar</Item>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <Item/>
                </Grid>
                <Grid item xs={2}>
                  <Item><Link href="https://github.com/Joseda8" style={{ color: '#FFF' }}><GitHubIcon/></Link></Item>
                </Grid>
                <Grid item xs={2}>
                  <Item><Link href="https://www.linkedin.com/in/josedanielmontoyasalazar/" style={{ color: '#FFF' }}><LinkedInIcon/></Link></Item>
                </Grid>
                <Grid item xs={2}>
                  <Item><Link href="mailto:jd.montoya.s8@gmail.com" style={{ color: '#FFF' }}><EmailIcon/></Link></Item>
                </Grid>
                <Grid item xs={2}>
                  <Item/>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Item><Copyright/></Item>
          </Grid>
        </Grid>
    </Box>
  </>

export default Footer;
