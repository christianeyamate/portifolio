import styled from "styled-components"

export const StyleSection = styled.section`
.mostrar{
  display: none;
  color: var(--grey-3);
}

.passar_mouse:hover .mostrar{
  display:flex;
  justify-content: center;
  line-height:none;
  }
  .container1 {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px;
}
  
  .container2 {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .container3 {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    height: 150px;
  }
  .container4 {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 50px;

  }
  .container8 {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

  }

  .container7 {
    display: flex;
    gap: 20px; 
    min-height:10vh; 
    width:100%;
    margin-top: 100px;
    @media (max-width: 870px){
      margin-top: 50px;
    } 
  }
  .container6 {
    display: flex;

    img{
     display: flex;
     @media (min-width: 921px){
        min-width: 355px;
    }
     
    }

  }
`
export const StyleUl = styled.ul`

    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    
    @media (max-width: 528px){
      overflow-x: auto;
      width: 100%;
      max-width: 300px;
      flex-wrap: nowrap;
 
    } 
    
`
export const StyledSpanBlue= styled.span`
color: var(--color-primary);
`
export const StyledSpanPink= styled.span`
font-weight: 700;
color: var(--instagram);
`
export const StyledFigure = styled.figure`
 
    max-width: 46px;
    height: 46px;  
    display: flex;
    object-fit: contain;
    border-radius: 100%;

    .image-sati{
    width: 46px;
    height: 46px;
    border-radius: 100%;
    
  }

`
export const StyledDiv= styled.div`
    display: flex;
  .container-1{
    display: flex;
    gap: 30px;
}
`