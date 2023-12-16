import styled from "styled-components"

export const StyledContainerDiv = styled.div`
display: flex;
/* align-items: flex-end; */
/* justify-content: space-between; */
flex-wrap: wrap;
height: 4.5rem;
align-items: center;

.container1{
display: flex;
align-items: center;
gap: 20px;
height: 170px;
width: 100%;
justify-content: center;

@media (max-width: 528px){
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    /* align-items: center; */
}
}

`