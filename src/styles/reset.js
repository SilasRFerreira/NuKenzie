import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        padding: 0;

        box-sizing: border-box;
    }   
    
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    input, textarea{        
        background: transparent;
    }
`
export default Reset
