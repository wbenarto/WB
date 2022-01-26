import React, {useState} from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Information from "../components/Information";
import ProjectComponent from "../components/Projects/index";
import Navbar from "../components/Navbar/Navbar";
import {Widget, WidgetButton, WidgetIcon} from '../components/Hero/HeroElements'
import coffeecup from '../assets/projects/coffeecup.svg'
import {FaAngleDown} from 'react-icons/fa'
// import {FaRegWindowClose} from 'react-icons/'

const LandingPage = () => {
  const [widget, setWidget] = useState(false)

  const toggleWidget = () => {
    if (widget == false) {
      setWidget(true)
    } else { 
      setWidget(false)
    }
  }

  return (
      <div>
      <Navbar />
      <Hero id="/" />
      <Information />
      <ProjectComponent layout="normal" />
      {/* {projects.map((e) => (
        <ProjectComponent project={e} layout="normal" />
      ))} */}
      <Contact />
      <WidgetButton onClick={()=>toggleWidget()}>
        {widget ? (<FaAngleDown style={{width: '100%', height: '100%'}}/>) : (<WidgetIcon src={coffeecup}></WidgetIcon>)}
      
      </WidgetButton>
      <Widget show={widget} title="Inline Frame Example"
        src="https://www.buymeacoffee.com/widget/page/wbenarto?description=100%25%20of%20all%20proceeds%20go%20to%20charity%20%F0%9F%98%87&color=%23FF5F5F"></Widget> 
    </div>
  );
};

export default LandingPage;
