import { StyledContainerGrid } from "../../Styles/Grid"
import { Body, Headline, Headline2, TitleH1, TitleH3 } from "../../Styles/Typography"
import { FaGithub } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { StyleDiv, StyleUl } from "./style";
export const ProjectSection = () => {

    return (
      <>
        <section id="project">
          <StyledContainerGrid>
            <StyleDiv>
              <div>
                <TitleH3>My projects</TitleH3>
                <Headline2>Some of my projects</Headline2>
              </div>
             <StyleUl >
              <li>
                <TitleH1>Fullstack</TitleH1>
                <Headline>Language: </Headline>
                <Headline2>ZOD, POSTGRES, TYPEORM,PG, PG-FORMAT, TYPESCRIPT, CSS, JS6, REACT, HTML.</Headline2>
                <div className="link">
                  <FaGithub size={33} color="868E96"/>
                  <a href="https://github.com/Kenzie-Academy-Brasil-Developers/desafio_Fullstack"target="_blank"><Body>Github Code</Body></a>
                  <IoArrowRedo size={33} color="868E96"/>
                  <a href="https://front-end-kappa-jade.vercel.app/"target="_blank"><Body>Application</Body></a>
                </div>
              </li>

              <li>
                <TitleH1>Kanvas</TitleH1>
                <Headline>Language: </Headline>
                <Headline2>Python e o framework Django, juntamente com o Django Rest Framework</Headline2>
                <div className="link">
                  <FaGithub size={33} color="868E96"/>
                  <a href="https://github.com/christianeyamate/m5-projeto-final-kanvas-christianeYamate"target="_blank"><Body>Github Code</Body></a>
                </div>
              </li>

              <li>
                <TitleH1>Kenzie Feed</TitleH1>
                <Headline>Language:</Headline>
                <Headline2>Web Design Responsivo, (POO), Controle de versão com git,  Componentização, bibliotecas externa,  NodeJs,  Consumo de APIs, Hooks, Programação lógica, JS,  CSS, TypeScript, HTML e  React.js.</Headline2>
                <div className="link">
                  <FaGithub size={33} color="868E96"/>
                  <a href="https://github.com/Kenzie-feed-grupo-7/kenzie-feed-grupo7"target="_blank"><Body>Github Code</Body></a>
                    <IoArrowRedo size={33} color="868E96"/>
                  <a href="https://kenzie-feed-grupo7-kappa.vercel.app//"target="_blank"><Body>Application</Body></a>
                </div>
              </li>

              <li>
                <TitleH1>Kenzie Hub</TitleH1>
                <Headline>Language: </Headline>
                <Headline2>React, React Hook Form,  Zod, React Router Dom, Styled-Components e Axios</Headline2>
                <div className="link">
                  <FaGithub size={33} color="868E96"/>
                    <a href="https://react-entrega-kenzie-hub-christiane-yamate.vercel.app/"><Body>Github Code</Body></a>
                      <IoArrowRedo size={33} color="868E96"/>
                    <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_ChristianeYamate"target="_blank"><Body>Application</Body></a>
                </div>
              </li>
            </StyleUl>
          </StyleDiv>
            </StyledContainerGrid>
          </section> 
      </>
    )
}
  
  
