import { StyledH2, StyledParagraph } from '../../../styles/typography'

import { StyledTotalMoney } from './StyledTotalMoney';

const TotalMoney = ({entryList}) => {  
    const values = [];

    entryList.map(card => {
        if (card.purchaseType === 'Saída') {
            values.unshift(Number(card.purchaseValue) * -1);
        } else {
            values.unshift(Number(card.purchaseValue));
        }
    })
    
    const sum = values.reduce((acc, prev) => {
        return acc + prev               
    },0)     
    
    return (
        <>           
            {values.length === 0 ? (
                <>                                                
                </>                    
                ) : (                        
                    <StyledTotalMoney>
                        <div className='list__full'>
                            <StyledH2>Valor total</StyledH2>
                            <StyledH2 componentColor='pink'>R$ {sum.toFixed(2)}</StyledH2>
                        </div>
                        <StyledParagraph componentColor='three'>O valor se refere ao saldo</StyledParagraph>
                    </StyledTotalMoney>
                    )
                }           
        </>                        
    )
}

export default TotalMoney