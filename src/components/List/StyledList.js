import styled from "styled-components";

import { tittleTwo } from "../../styles/typography";

export const StyledList = styled.section`
    font-family: var(--nunito-family);
    
    width: clamp(200px, 100%, 355px);    

    padding: 1rem 0.8rem;
    
    display: flex;
    flex-direction: column;    
    
    gap: 2rem;  
    
    ul{ 
        height: 400px;

        display: flex;
        flex-direction: column;

        gap: 2rem;

        overflow-y: auto;
    }

    #list__empty {
        ${tittleTwo}
    }

    @media (min-width: 767px) {
        width: clamp(200px, 100%, 500px);;
    }
`