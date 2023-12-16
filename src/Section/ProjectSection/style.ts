import styled from "styled-components"

export const StyleDiv = styled.div`
  display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    max-width: 400px;
    flex-direction: row;
    /* height: 150px; */
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
    /* height: 150px; */
    li{
        display: flex;
        gap: 20px;
        flex-direction: column;
      

    }
`