import React from "react";
import insta from "../../assets/insta.png";
import linked from "../../assets/linkedin.png";
import github from "../../assets/github(white).png";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="my-row">
        <a
          href="https://www.instagram.com/chris.yamasaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="socials"
            src={insta}
            title="instagram"
            alt="instagram"
            width={53}
            height={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-yamasaki-3a6420190/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="socials"
            src={linked}
            title="linkedin"
            alt="linkedin"
            width={40}
            height={40}            
          />
        </a>
        <a
          href="https://github.com/theyamasakiman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="socials"
            src={github}
            title="github"
            alt="github"
            width={40}
            height={40}
          />
        </a>
      </div>

      <div className="my-row">
        <p className="small-text text-center">
          Copyright © Chris Yamasaki 2026. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;