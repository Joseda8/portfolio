import './App.css';
import NavBar from './components/NavBar/NavBar';
import WelcomeView from './components/WelcomeView/WelcomeView';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import SkillsSet from './components/SkillsSet/SkillsSet';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WelcomeView/>
      <br/><br/><br/>
      <div style={{ background: 'linear-gradient(to top, #90caf9, #FFFFFF', padding:25 }}>
        <AboutMe/>
        <br/><br/><br/>
        <SkillsSet/>
      </div>
      <Projects/>
      <div style={{marginBottom: 150}}/>
      <Footer/>
    </div>
  );
}

export default App;

// npx generate-react-cli component MyComponent
// https://mattfarley.ca/
// https://mui.com/

// "start": "react-scripts start",s


// https://www.loginradius.com/blog/engineering/react-router-basics/
// https://portfolio-jose-montoya.herokuapp.com/
// https://mui.com/material-ui/customization/palette/
