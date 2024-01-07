import styled from 'styled-components';
import { body, headline, tittleTwo } from '../../../styles/typography'

export const StyledForm = styled.form`
    font-family: var(--inter-family);
    
    padding: 1.875rem 1.25rem 2.625rem 1.3125rem;
    
    background-color: #ffffff;   
    
    display: flex;
    flex-direction: column;

    border: 1px solid rgba(0,0,0,0.2);    

    gap: 1rem;

    fieldset{
        display: flex;
        flex-direction: column;

        gap: 1rem;

        label {
            ${body}
        }

        input{
            height: 3.25rem;
            padding: 0 1rem;
    
            background: var(--color-gray-1);
    
            border: 2px solid var(--color-gray-1);
            border-radius: 0.5rem;
        }

        input::placeholder {
            ${headline}
            color: var(--color-gray-3);
        }

        select {
            height: 3rem;
            padding: 0 1rem;

            background: var(--color-gray-1);
    
            border: 2px solid var(--color-gray-1);
            border-radius: 0.5rem;

            ${body}
            color: var(--color-gray-3);
        }  
    }

    #failToast {
        ${tittleTwo}
        color: red;
        align-self: center;
    }

    button {
        background-color: var(--color-primary);

        border: 2px solid var(--color-primary);
        border-radius: 0.5rem;

        color: #ffffff;

        padding: 0.8125rem 1.25rem;        
    }

    button:hover{
        background-color: var(--color-primary-2);

        border: 2px solid var(--color-primary-2)
    }
` 
