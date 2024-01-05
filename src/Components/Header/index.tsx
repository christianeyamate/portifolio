import { StyledBtnGrey } from "../../Styles/Button"
import { StyledContainerGrid } from "../../Styles/Grid"
import { TitleH2 } from "../../Styles/Typography"
import { StyledContainer, StyledUl } from "./style"
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
                    </div>
                  <li><a href="#home" ><StyledBtnGrey>Home</StyledBtnGrey></a></li>
                  <li><a href="#about" ><StyledBtnGrey>About</StyledBtnGrey></a></li>
                  <li><a href="#project" ><StyledBtnGrey>Projects</StyledBtnGrey></a></li>
                  <li><a href="#contact" ><StyledBtnGrey>Contact</StyledBtnGrey></a></li>
              </StyledUl>
            </StyledContainer>
          </StyledContainerGrid>
        </header> 
      </>
    )
}
  
  
