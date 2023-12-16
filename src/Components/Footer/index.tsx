
import { Headline, Headline2 } from "../../Styles/Typography"
import { StyledFigure } from "../../Section/BannerSection/style"; 
import photo from "../../assets/sat.jpg"
import { StyledContainerGrid } from "../../Styles/Grid";
import { StyledContainerDiv } from "./style";
import { TiSocialLinkedinCircular } from "react-icons/ti";


export const Footer = () => {

    return (
      <>
       
         <StyledContainerGrid>
            <StyledContainerDiv>
            <div className="container1">
                    <StyledFigure>
                        <img className="image-sati" src = {photo} alt = "photo" />
                    </StyledFigure>
                    <div>
                        <Headline>Thank you!</Headline>
                        <Headline2 className="container3">Follow me on my social networks and let's talk</Headline2>
                    </div> 
              <div>
              <TiSocialLinkedinCircular size={60}  color="#506CCF"/>
              </div>      
                </div>
            </StyledContainerDiv>
      </StyledContainerGrid>
    
        </>
    )
}


