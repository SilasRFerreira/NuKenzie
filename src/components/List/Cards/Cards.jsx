import { StyledH2, StyledParagraph } from '../../../styles/typography'

import { StyledCard } from './StyledCard'

const EntryCard = ({card, removeCard}) => {
    const value = Number(card.purchaseValue)    
    
    return (
    <>    
    <StyledCard id={card.id}>
        <div className='card__left'>
            <StyledH2>{card.purchasDescription}</StyledH2>
            <StyledParagraph>{card.purchaseType}</StyledParagraph>
        </div>
        <div className='card__right'>
            <StyledParagraph componentColor='three'>R$ {value.toFixed(2)}</StyledParagraph>
            <button onClick={() => removeCard(card.id)}>Excluir</button>
        </div>
    </StyledCard>           
    </>     
    )
}

export default EntryCard