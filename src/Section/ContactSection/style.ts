import styled from "styled-components"

export const StyleInput = styled.input`

width: 80%;
background-color: var(--grey-2);
height: 38px;
border-radius: 8px;
border:2px solid var(--color-primary-50);
`
export const StyledDiv= styled.div`

.div-container{
    display: flex;
    flex-direction: row;
    gap: 10px;
}

img{
    width: fit-content;
}
.container-div{
    display: flex;
    flex-direction: column;
    gap: 10px;
   
}

.container-div2{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
}
input:focus{
    border:2px solid var(--color-primary);
}
   
.container-div3{
    display: flex;
    flex-direction: row;
    gap: 20px;

@media (max-width: 528px){
      flex-wrap: wrap;
    } 
}
`
