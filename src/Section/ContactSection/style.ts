import styled from "styled-components"

export const StyleInput = styled.input`

width: 100%;
background-color: var(--grey-2);
height: 38px;
border-radius: 8px;
border:2px solid var(--color-primary-50);
`
export const StyledDiv= styled.div`

.div-container{
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 50px;
}

img{
    width: fit-content;
}
.container-div{
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 550px;
    padding-right:50px;
    margin-top: 50px;
    
    @media (max-width: 528px){
        gap: 20px;
        padding-right:0px;
        margin-top: 10px;

    } 
   
}

.container-div2{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 70px;
    @media (max-width: 870px){
        gap: 20px;
        margin-top: 0px;
   
    } 
}
input:focus{
    border:2px solid var(--color-primary);
}
   
.container-div3{
    display: flex;
    flex-direction: row;
    gap: 20px;

@media (max-width: 870px){
      flex-wrap: wrap;
      gap: 20px;
    } 
}
`
