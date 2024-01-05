

import { Body, Headline2, Headline3, TitleH2 } from "../../Styles/Typography"
import { StyledSpanBlue } from "../BannerSection/style"
import email from "../../assets/email.png"
import { FaGithubSquare } from "react-icons/fa";
import linkedin from "../../assets/linkedin.png"
import { StyledContainerGrid } from "../../Styles/Grid";
import { StyledBtn } from "../../Styles/Button";
import { StyleInput, StyledDiv } from "./style";


export const ContactSection = () => {

    return (
      <>
         <section id="contact">
          <StyledContainerGrid>
            <StyledDiv>
              <div className="container-div3">
                <div className="container-div">
                  <TitleH2>Let's set up a conversation and <StyledSpanBlue>develop our creativity</StyledSpanBlue> together?</TitleH2>
                  <Headline2>Advertise your brand organically within Dribbble’s design inspiration feed.</Headline2>
                  <label htmlFor="Email"></label>
                  <StyleInput type="email"  placeholder="  Writer your email here..."/>
                  <a href="mailto=christiane.osiro@gmail.com" target="_blank"   onClick={() => (window.location.href = "mailto:christiane.osiro@gmail.com")}><StyledBtn>Send now</StyledBtn></a>
          
                </div>

                <div className="container-div2">

                  <div className="div-container">
                    <div>
                      <FaGithubSquare size={82.5}  color="F8F9FA" />
                    </div>
                    <div>
                      <TitleH2>My GitHub</TitleH2>
                      <a href="https://github.com/christianeyamate"target="_blank"><Body>See github</Body></a>
                 
                   
                    </div>
                  </div>
                
                  <div className="div-container">
                    <div>
                      <img className="email" src = {email} alt = "img-mail" />
                    </div>
                    <div>
                      <TitleH2>My email</TitleH2>
                      <Headline3>Send me an email reporting feedbacks, suggestions and ideas</Headline3>
                      <a href="mailto=christiane.osiro@gmail.com" target="_blank"   onClick={() => (window.location.href = "mailto:christiane.osiro@gmail.com")}><Body>Send me an email</Body></a>
                    
                    </div>
                  </div>

                  <div className="div-container">
                    <div>
                      <img className="linkedin" src = {linkedin} alt = "linkedin" />
                      </div>
                      <div>
                      <TitleH2>My LinkedIn</TitleH2>
                      <Headline3>We can create more constant interactions as well as a sharing network</Headline3>
                      <a href="https://www.linkedin.com/in/chris-yamate/"target="_blank"><Body>Go to LinkedIn now</Body></a>
                    
                    </div>
                  </div>
           
                </div>
              </div>
             
            </StyledDiv>
      
          </StyledContainerGrid>
        </section> 
      </>
    )
}
  
  
