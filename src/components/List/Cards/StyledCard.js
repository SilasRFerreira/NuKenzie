import styled from 'styled-components';

import { body } from '../../../styles/typography';

export const StyledCard = styled.li`
    padding: 1rem;

    background-color: var(--color-gray-1);

    border-left: 0.5rem solid var(--color-secundary);
    border-radius: 0.25rem;

    display: flex; 
    flex-wrap: wrap;

    justify-content: space-between;

    gap: 1rem;

    width: 100%;

    div {
        width: 150px;

        display: flex;
        flex-direction: column;        

        gap: 1rem;

        button {
            padding: 0.4rem 0.6rem;

            background-color: var(--color-gray-2);

            border: 1px solid var(--color-gray-2);
            border-radius: 0.125rem;

            color: var(--color-gray-4);

            ${body}

            width: fit-content;
        }

        button:hover{
            color: var(--color-gray-2);

            border: 1px solid var(--color-gray-4);

            background-color: var(--color-gray-4);
        }


    }

    @media (min-width: 763px) {
        .card__right {
            align-items: flex-end;
        }
    }
`