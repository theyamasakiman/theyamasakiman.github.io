import React from 'react';
import Navbar from './components/nav/navbar';
import ProjectCard from './components/card/card';
import '../app/App.css';
import logo from './assets/logo_frame.png';
import CBV from './assets/Cote logo (white).png';
import CGB from './assets/CGB.png';
import zest from './assets/zester.png';
import pnb from './assets/CharcoalMainTextLogo.png'
import Footer from './components/footer/footer';
import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
            <div id="halo">
        <a href="#proj">
          <Image className="main arrow" src={logo} alt="stylized 'c' and 'y' for chris' logo" height={340} width={340} />
          <div className="arrow main">I</div>
        </a>
      </div>
      <main>
        <header className="middle">
          <div className="flexy center">
            <div className="center">CHRIS</div>
            <div className="center">YAMASAKI</div>
            <div className="center">DESIGN</div>
          </div>
        </header>

        <div className="title-container">
          <div id="proj" className="title margr">PROJECTS +</div>
          <div className="title">DELIVERABLES</div>
        </div>

        <div className="folio-c">
          <ProjectCard title="My Start Up" image={pnb} link="https://peoplesnotebook.com/" text="Connecting through closed group social reflection"/>
          <ProjectCard title="A winery e-commerce redesign" image={CBV} link="/Cote" text="Guiding users efficiently towards making a purchase"/>
          <ProjectCard title="Senior capstone" image={CGB} link="https://drive.google.com/file/d/1PgSRLDxpOhzBuf-4uHfogZQgflrqt1zg/view?usp=sharing" text="Humanizing and personalizing online interactions"/>
          <ProjectCard title="Zest Friends" image={zest} link="https://zestfriends.weebly.com/" text="Helping build community through cooking"/>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;