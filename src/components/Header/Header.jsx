import logo from '../../assets/logo.svg'

import { StyledHeader } from './StyledHeader'
import { Container } from '../../styles/Container'


const Header = () => {
    return(        
        <StyledHeader>
            <Container>
                <img src={ logo } alt='' />
            </Container>
        </StyledHeader>
    )
}

export default Header