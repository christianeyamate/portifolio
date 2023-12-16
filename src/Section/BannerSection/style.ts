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
    /* max-width: 65%; */
  }
  .container3 {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    height: 150px;
    /* margin: 20px;
    max-width: 65%; */
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
  /* .container5 {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap; */
/*     
    @media (max-width: 528px){
      display: flex;
      width: 100%;
      overflow-x: auto;
      flex-wrap: nowrap;
 
    }
     */
    /* @media (max-width: 528px){
      overflow-x: auto;
      flex-wrap: nowrap;
      max-height: 100vh;
 
    } */
    /* margin: 20px;
    max-width: 65%; */
  /* } */
  .container7 {
    display: flex;
    /* align-items: center; */
    gap: 20px; 
    /* flex-direction: row; */
    /* flex-wrap: wrap;  */
    /* margin: 20px;
    max-width: 65%; */
    min-height:10vh; 
    width:100%;
    margin-top: 100px;
  }
  .container6 {
    display: flex;
    /* flex-direction: row-reverse;   */

    img{
     display: flex;
     /* position: fixed;
     width: 50%; */
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
      /* width: 100%;  */
      overflow-x: auto;
      width: 100%;
      max-width: 300px;
      flex-wrap: nowrap;
 
    } 
    
`
export const StyleLi = styled.li`

    /* display: flex; */

    
    /* align-items: center;
    gap: 20px;
    flex-wrap: wrap; */
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
    /* width: clamp(14.8125rem, 100%, 27.3125rem); */
object-fit: contain;
border-radius: 100%;

  .image-sati{
  
/* display: flex; */
width: 46px;
    height: 46px;
    border-radius: 100%;
    /* object-fit: contain; */
  }
/* height: 6px; */

/* width: clamp(14.8125rem, 100%, 27.3125rem); */

`
export const StyledDiv= styled.div`
display: flex;
.container-1{
    display: flex;
    gap: 30px;
    /* padding: 100px; */

}

    /* font-weight: 400;
    font-size: .75rem; */

`