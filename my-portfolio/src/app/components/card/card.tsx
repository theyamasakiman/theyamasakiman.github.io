import React from 'react';
import Link from 'next/link';
import { StaticImageData } from "next/image";
import Image from "next/image";
// import 'src/App.css';

interface ProjectCardProps {
  title: string;
  image: string | StaticImageData;
  link: string;
  text: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, link, text }) => {
  return (

    <Link className="fol-con" href={link} target="_blank" rel="noopener noreferrer">
      <Image className="main" src={image} alt={title} height={340} width={340}/>
      <div className="main">{title}</div>
      <div className="main read-text">{text}</div>
    </Link>
  );
};

export default ProjectCard;