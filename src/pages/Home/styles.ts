import styled from "styled-components"
export const SSection = styled.aside`
    display: flex;
    max-width: 1090px;
    margin: 0 auto;
    img{
        width: 50%;
    }
    @media (max-width: 400px){
        flex-direction: column;
        img{
            width: 100%;
        }
    }
`