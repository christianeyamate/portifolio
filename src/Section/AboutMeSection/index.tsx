import { StyledContainerGrid } from "../../Styles/Grid"
import { Headline2, TitleH3 } from "../../Styles/Typography"
import { StyleSection } from "../BannerSection/style"
import { StyleDiv } from "./style"



export const AboutSection = () => {

    return (
      <>
         <StyledContainerGrid>
            <StyleDiv>
              <StyleSection id="about">
                <TitleH3>About Me</TitleH3>
                <Headline2>
                  Sou uma pessoa apaixonado pelo mundo da tecnologia, responsável, colaborativa, motivada e impulsionada pelo desejo de superar novos desafios. <br /> 
                  Estou sempre ansiosa para absorver novos conhecimentos tecnológicos, e aperfeiçoar minhas habilidades. <br /> 
                  Estou me formado como Desenvolvedor Fullstack pela Kenzie Academy Brasil. <br /> 
                </Headline2>
              </StyleSection> 
            </StyleDiv>
          </StyledContainerGrid>
      </>
    )
}
  
  
