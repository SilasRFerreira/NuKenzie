import styled, { css } from 'styled-components';

export const tittleOne = css`
    font-size: 2.375rem;
    font-weight: bold;
`

export const tittleTwo = css`
    font-size: 1.375rem;
    font-weight: bold;
`

export const tittleThree = css`
    font-size: 1rem;
    font-weight: bold;
`

export const tittleFour = css`
    font-size: 0.75rem;
    font-weight: bold;
`

export const headline = css`
    font-size: 1rem;
    font-weight: normal;
`

export const body = css`
    font-size: 0.75rem;
    font-weight: normal;
`

export const StyledH2 = styled.h2`    
    ${tittleThree}
    ${({componentColor}) => {
        if(componentColor === 'pink') {
            return css`
                color: var(--color-primary);
                
            `
        } else {
            return css`
                color: var(--color-gray-4);
            `
        }
    }    
}`

export const StyledParagraph = styled.p`
    ${body}
    ${({componentColor}) => {
        if(componentColor === 'three') {
            return css`
                color: var(--color-gray-3);
                
            `
        } else {
            return css`
                color: var(--color-gray-4);
            `
        }
    }    
}
`