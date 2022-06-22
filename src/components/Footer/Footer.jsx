import React from "react";
import { Wrapper } from "./Styles";
import { BsLinkedin, BsGithub, BsFillFilePersonFill } from "react-icons/bs";
import { useResize } from "../Hooks/useResize";

const Footer = () => {

  const { isPhone } = useResize()

  return (
    <Wrapper>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/franciscoferraro/"
        >
          <BsLinkedin fontSize={isPhone ? 50 : 70} color="var(--purple-color)" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Franciscof94"
        >
          <BsGithub fontSize={isPhone ? 50 : 70} color="var(--purple-color)" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://franciscof94.github.io/portfolio/"
        >
          <BsFillFilePersonFill fontSize={isPhone ? 50 : 70} color="var(--purple-color)" />
        </a>
      </div>
      <div>©2022 by Francisco Ferraro, Todos los derechos reservados</div>
    </Wrapper>
  );
};

export default Footer;
