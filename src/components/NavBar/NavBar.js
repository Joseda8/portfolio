import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = [
  {name: "About me", tag: "about_me"},
  {name: "Skill set", tag: "skill_set"},
  {name: "Projects", tag: "projects"},
];

const NavBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="https://portfolio-jose-montoya.herokuapp.com/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              JDMS
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'inline', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block', paddingLeft: 2, paddingRight: 2 }}
                onClick={() => window.location.replace(`/#${page.tag}`)}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>

    </AppBar>
  );
};
export default NavBar;
