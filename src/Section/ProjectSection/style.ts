import styled from "styled-components"

export const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    flex-direction: row;
    
    .link{
        display: flex;
        gap: 20px;
        align-items: center;

    }
`
export const StyleUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;

    li{
        display: flex;
        gap: 20px;
        flex-direction: column;
        max-width: 550px;
        margin: 50px 0px 50px;
        padding-right:50px;

        @media (max-width: 870px){
        gap: 20px;
        margin: 10px 0px 10px;
        padding-right:0px;
        } 

    }
`