import React, {useState} from "react";
import styles from './WelcomeView.module.css';
import Typography from '@mui/material/Typography';
import Avatar from 'avataaars';

export default function WelcomeView() {

  const [avatartEyeType, setAvatartEyeType] = useState('Close');
  const [avatartMouthType, setAvatartMouthType] = useState('Disbelief');
  const [welcomeMessage, setWelcomeMessage] = useState('Wake me up by hovering over me so we can meet');

  function avatar_wake_up() {
    setAvatartEyeType('Default');
    setAvatartMouthType('Smile');
    setWelcomeMessage("It's great to see you here. Someone already told you that you look great today?");
  }
  
  // function avatar_sleep() {
  //   setAvatartEyeType('Close');
  //   setAvatartMouthType('Disbelief');
  // }
  
  return  (
    <div className={styles.WelcomeView} onMouseEnter={avatar_wake_up} /*onMouseLeave={avatar_sleep}*/>
      <br></br>
      <br></br>
      <h1>Hello there!</h1>
      <h2>I'm a software developer passionate about web programming.</h2>
      <Avatar
        style={{width: '275px', height: '275px'}}
        id='my_avatar'
        avatarStyle='Circle'
        topType='ShortHairShortFlat'
        accessoriesType='Blank'
        hairColor='Blonde'
        facialHairType='Blank'
        clotheType='Hoodie'
        clotheColor='Black'
        eyeType={avatartEyeType}
        eyebrowType='DefaultNatural'
        mouthType={avatartMouthType}
        skinColor='Pale'
      />
      <br></br>
      <br></br>
      <Typography variant="h5" color="inherit" component="div">
        {welcomeMessage}
      </Typography>
    </div>
  );
}
