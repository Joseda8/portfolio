import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const projects = [
  {
    name: 'Rockermind',
    description: 'My capstone projects. If you are a fan you can follow bands and see their events, place owners create events and bands can make posts. But the website includes so many cool details that you should see now!',
    videoURI: 'https://www.youtube.com/embed/QS2AWl33ego',
  },
  {
    name: 'The Godfather',
    description: 'Wow! This was my first project in this course, and it was just a vanilla HTML with CSS.',
    videoURI: 'https://www.youtube.com/embed/h4-KqvuuB6s',
  },
  {
    name: 'My Book Reviewer',
    description: 'This project is a platform built with Flask to upload reviews about books, see tops and comments from other users. I love the logo I made for this web site.',
    videoURI: 'https://www.youtube.com/embed/dQmHFoHSCIk',
  },
  {
    name: 'My Chat Room',
    description: 'A chat website based on rooms, Flask and Web Sockets! I had to add a personal detail so I added a buzzing subsystem... Good Windows Messenger times after school.',
    videoURI: 'https://www.youtube.com/embed/LR56QW9YIwU',
  },
  {
    name: "Panucci's Pizza",
    description: "Yes, you noticed it... I love Futurama. So for this Django project I made a platform to order food from a pizza menu at Panucci's",
    videoURI: 'https://www.youtube.com/embed/cW_MZRgEzcU',
  },
];

function VideosCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      let newStep = prevActiveStep + 1;
      if (newStep === maxSteps) {
        newStep = 0;
      }
      return newStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return maxSteps - 1;
      }
      return prevActiveStep - 1;
    });
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {projects.map((step) => (
          <Card key={step.name}>
            <br/>
            <div style={{paddingLeft:30, paddingRight:30}}>
              <h2>{step.name}</h2>
              <p>
                {step.description}
              </p>
            </div>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe title={step.label} class="embed-responsive-item" src={step.videoURI} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br/>
          </Card>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default VideosCarousel;
