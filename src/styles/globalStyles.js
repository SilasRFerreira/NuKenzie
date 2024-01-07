import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-secundary: #03B898;

        --color-gray-1: #F8F9FA;
        --color-gray-2: #E9ECEF;
        --color-gray-3: #868E96;
        --color-gray-4: #212529;     

        --inter-family: 'Inter', sans-serif;
        --nunito-family: 'Nunito Sans', sans-serif;
    }

    body{
        height: 100vh;        

        background-color: #ffffff;
    }

    main{
        display: flex;

        flex-direction: column;   
        
        align-items: center;

        margin: 2rem auto;

        justify-content: space-between; 

        width: clamp(250px, 100%, 900px);        
    }    

    @media (min-width: 767px) {
        main {
            flex-direction: row;

            align-items: flex-start;

            gap: 4rem
        }      
    }
`

export default GlobalStyles