import { StyledBtnGrey } from "../../Styles/Button"
import { StyledContainerGrid } from "../../Styles/Grid"
import { TitleH2 } from "../../Styles/Typography"
import { StyledContainer, StyledUl } from "./style"
import { TiThMenu } from "react-icons/ti";
  import BasicMenu from "../Menu";
export const Header = () => {

    return (
      <>
         <header>
         <StyledContainerGrid>
            <StyledContainer>
            <div>
                <TitleH2>Christiane</TitleH2>
            </div>
              <StyledUl>
            <div className="icon">
              <BasicMenu/>
                  {/* <TiThMenu size={30}  color="#868E96"/>   */}
            </div>
            {/* <a href="#home" >Home</a>
        <a href="#about" >About</a>
        <a href="#project" >Projects</a>
        <a href="#contact" >Contact</a> */}
                
                <a href="#home" ><StyledBtnGrey>Home</StyledBtnGrey></a>
                <a href="#about" ><StyledBtnGrey>About</StyledBtnGrey></a>
                <a href="#project" ><StyledBtnGrey>Projects</StyledBtnGrey></a>
                <a href="#contact" ><StyledBtnGrey>Contact</StyledBtnGrey></a>
              </StyledUl>
            </StyledContainer>
            </StyledContainerGrid>
          </header> 
      </>
    )
}
  
  
