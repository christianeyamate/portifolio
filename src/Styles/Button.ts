import styled from "styled-components"

// export const StyledBtnRed = styled.button`
//   font-size: 1rem;
//   font-weight: 500;
//   line-height: 1.625rem;
//   color: var(--grey-0);
//   background-color: var(--color-Primary);
//   border-radius: .25rem;
//   border: .0625rem solid var(--color-Primary);
//   width: 8.3125rem;
//   height: 3rem;
//   padding: .625rem, 1.4375rem;
//   transition: .4s;

//   :hover{
//     background-color: var(--color-Primary-Focus);
//     background-color: var(--color-Primary-Focus);
//   }

//   &:disabled{
//     cursor: not-allowed;
//     background-color: var(--color-Primary-Negative);
//     border: .0625rem solid var(--color-Primary-Negative);
//   }
// `
export const StyledBtnGrey = styled.button`
  font-size: 1rem;
  font-weight: 500;
  /* line-height: 1.25rem; */
  color: var(--grey-1);
  background-color: var(--grey-4);
  /* border-radius: .25rem; */
  /* font-family: var(--font-family-IBM); */
  /* border: .0625rem solid var(--grey-1); */
  width: 2.8125rem;
  height: 1.3125rem;
  /* padding: .625rem, 1.4375rem; */
  transition: .4s;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: .9375rem;
  outline:none;
  :hover{
    color: red;
    background-color:red;
    border:red;
  }
  @media (max-width: 528px){
  display: none;
       
    }
`
export const StyledGreySmall = styled.button`
  font-size: .75rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: var(--grey-0);
  background-color: var(--grey-1);
  border-radius: .25rem;
  border: .0625rem solid var(--grey-1);
  width: 6.25rem;
  height: 2rem;
  padding: .0938rem, 1rem;

  :hover{
    background-color: var(--grey-2);
  }
  &:disabled{
    cursor: not-allowed;
    background-color: var(--grey-3);
    border: .0625rem solid var(--grey-3); 
  }
`

//   export const StyledBtnRed2 = styled.button`
//   font-size: 1rem;
//   font-weight: 500;
//   line-height: 1.625rem;
//   color: var(--grey-0);
//   background-color: var(--color-Primary);
//   border-radius: .25rem;
//   border: .0625rem solid var(--color-Primary);
//   width: 100%;
//   height: 3rem;
//   padding: .625rem, 1.4375rem;
//   transition: .4s;

//   :hover{
//     background-color: var(--color-Primary-Focus);
//     background-color: var(--color-Primary-Focus);
//   }

//   &:disabled{
//     cursor: not-allowed;
//     background-color: var(--color-Primary-Negative);
//     border: .0625rem solid var(--color-Primary-Negative);
//   }
// `
export const StyledBtnBlue = styled.button`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--grey-1);
    background-color: var(--color-primary);
    width: 160px;
    height: 48px;
    border-radius: 8px;
    border:2px var(--color-primary);
    padding:0px, 32px, 0px, 32px;
    gap:10px;
  
    /* margin: 20px; */
  
  
 .hover {
    background-color: var(--color-primary-50);
  }
  :focus{
    background-color: var(--color-primary-50);
  }
  `
  export const StyledBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--grey-1);
  background-color: var(--color-primary);
  width: 80%;
  height: 38px;
  border-radius: 8px;
  border:2px var(--color-primary);
  padding:0px, 32px, 0px, 32px;
  margin-top:20px;
  /* margin: 20px; */


.hover {
  background-color: var(--color-primary-50);
}
:focus{
  background-color: var(--color-primary-50);
}
`