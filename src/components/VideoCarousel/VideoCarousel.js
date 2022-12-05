import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

const projects = [
  {
    name: 'Rockermind',
    description: 'My last project. If you are a fan you can follow bands and see their events, place owners can create events, bands can make posts... And some other cool things!',
    videoURI: 'https://www.youtube.com/embed/QS2AWl33ego',
  },
  {
    name: 'The Godfather',
    description: 'This was my first project in this course! It was just a vanilla HTML with CSS talking about The Godfather movie.',
    videoURI: 'https://www.youtube.com/embed/h4-KqvuuB6s',
  },
  {
    name: 'My Book Reviewer',
    description: 'This is a platform built with Flask to upload reviews about books. The user can also see ranks and comments from other users. I love the logo I made for this web site.',
    videoURI: 'https://www.youtube.com/embed/dQmHFoHSCIk',
  },
  {
    name: 'My Chat Room',
    description: 'A chat based on rooms, Flask and Web Sockets! I had to add a personal detail so I added a buzzing subsystem... Good Windows Messenger times after school.',
    videoURI: 'https://www.youtube.com/embed/LR56QW9YIwU',
  },
  {
    name: "Panucci's Pizza",
    description: "Yes, you noticed it... I love Futurama. So for this Django project I made a web page to order food from a pizza menu at Panucci's.",
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
          <Card key={step.name} style={{minHeight: 100, height: "100%"}}>
            <br/>
            <div style={{paddingLeft:30, paddingRight:30}}>
              <h2>{step.name}</h2>
              <p>
                {step.description}
              </p>
            </div>
            <YoutubeEmbed title={step.label} videoURI={step.videoURI}/>
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
