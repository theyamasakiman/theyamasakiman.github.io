import React from 'react';
import logo from '../../assets/logo_frame.png';
import github from '../../assets/github(white).png';
import linkedin from '../../assets/linkedin.png';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/"><Image src={logo} alt="Logo" width={40} height={40}/></a>
      </div>
      <div className="nav-buttons">
        <a href="https://github.com/theyamasakiman" target="_blank" rel="noopener noreferrer">
          <Image id="github" src={github} alt="github" title="github" width={40} height={40} />
        </a>
        <a href="https://www.linkedin.com/in/christopher-yamasaki-3a6420190/" target="_blank" rel="noopener noreferrer">
          <Image className="socials" src={linkedin} alt="linkedin" title="linkedin" width={40} height={40} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;