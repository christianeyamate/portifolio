import styled from "styled-components"

export const StyledContainer = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 4.5rem;
  align-items: center;
  `
  export const StyledUl = styled.ul`
    display: flex; 
  a{
    text-decoration:none;
  }
  .icon{
    @media (min-width: 528px){
      display: none;   
    }
  }
    @media(max-width: 528px){
      .menuButton{
      width: 30px;
      height: 30px;
      position: absolute;
      right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
  }
  .linha{
    display: flex;
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .menuSandwich{
    display: none;

  }
  .show{
    display: flex;
    width: 50%;
    height: auto;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: var(--grey-4);
    flex-direction: column;
    padding: 20px;
    gap:16px;
  }
  }
  @media(max-width: 480px){
    .show{
      width:100%;
    }
  }
  `


