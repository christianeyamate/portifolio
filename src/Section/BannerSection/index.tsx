import { StyledBtnBlue } from "../../Styles/Button"
import { StyledContainerGrid } from "../../Styles/Grid"
import { Headline, Headline2, TitleH1 } from "../../Styles/Typography"
import {  StyleSection, StyleUl, StyledFigure, StyledSpanBlue, StyledSpanPink } from "./style"
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import bgImg  from "../../assets/banner-bg.png"
import photo from "../../assets/sa-photo.jpg"
import { IoLogoGithub } from "react-icons/io5";
import { StyledContainer } from "../../Components/Header/style";


export const BannerSection = () => {

    return (
      <>
         <StyledContainerGrid>
          

         <StyleSection id="home">
            {/* <StyledDiv> */}

      
            <div className="container7">
              <div>
                  {/* <StyledContainer> */}
                  <div className="container1">
                    <StyledFigure>
                        <img className="image-sati" src = {photo} alt = "photo" />
                    </StyledFigure>
                        <Headline>Hello, my name is <StyledSpanPink>Christiane</StyledSpanPink></Headline>
                </div>
            <div className="container2">
                <TitleH1>I <StyledSpanBlue>love </StyledSpanBlue>creating and <StyledSpanBlue>developing </StyledSpanBlue>projects
                </TitleH1>
            </div>
            <div className="container8">
            <Headline2 className="container3">Discover here in this environment, created especially for you, all my projects and technologies</Headline2>
            </div>
            <div className="container4">
            <StyledBtnBlue>See Projects</StyledBtnBlue>
            {/* <img src = { git } alt = "git" /> */}
            <IoLogoGithub size={50} color="F8F9FA"/>
            </div>
            {/* <div className="container5"> */}
              <StyleUl>
                <li className="passar_mouse"><FaHtml5 size={100}  color="#868E96" /><div className="mostrar">Html</div></li>
                <li className="passar_mouse"><SiCss3  size={100}  color="#868E96"/><div className="mostrar">Css</div></li>
                <li className="passar_mouse"><FaReact size={100}  color="#868E96" /><div className="mostrar">React</div></li>
                <li className="passar_mouse"><SiJavascript size={100}  color="#868E96"/><div className="mostrar">Javascript</div></li>
                <li className="passar_mouse"><SiTypescript size={100}  color="#868E96"/><div className="mostrar">Typescript</div></li>
                <li className="passar_mouse"><SiStyledcomponents size={100}  color="#868E96"/><div className="mostrar">Styledcomponents</div></li>
                <li className="passar_mouse"><FaNode size={100}  color="#868E96"/><div className="mostrar">Node.js</div></li>
                <li className="passar_mouse"><IoLogoPython size={100}  color="#868E96"/><div className="mostrar">Python</div></li>
                <li className="passar_mouse"><SiPostgresql size={100}  color="#868E96" /><div className="mostrar">PostgreSQL</div></li>
                <li className="passar_mouse"><SiNextdotjs size={100}  color="#868E96"/><div className="mostrar">Next.js</div></li>
                <li className="passar_mouse"><DiDjango size={100}  color="#868E96"/><div className="mostrar">Django</div></li>
              </StyleUl>

            {/* <AiOutlineArrowLeft size={18} /> */}
           
            
           

{/*       
            </div> */}
            </div>
          
            <div className="container6">
              <picture>
                <source srcSet={bgImg} media='(min-width: 921px)'/>
                <img src = {""} />
              </picture>
            </div>
            </div>
            {/* </StyledDiv> */}
          </StyleSection> 
    
            </StyledContainerGrid>
      </>
    )
}
  
  
