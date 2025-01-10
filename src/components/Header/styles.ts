import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
export const SHeader = styled.header`
    /* Cabeçalho */
    border-bottom: 0.4rem solid ${colors.primary};
    display: flex;
    height: 6rem;
    picture{
        margin-left: 0.5rem;
        padding: 0.5rem;
        img {
            height: 100%;
        }
    }
    @media (max-width: 768px){
        height: 4.5rem;
    }
`

export const SNavBar = styled.nav`
    /* Navegação */
    display: flex;
    align-items: center;
    a {
        margin: 0 1rem;
        text-decoration: none;
        color: ${colors.black};
    }
    a:hover {
        font-weight: bold;
    }
`