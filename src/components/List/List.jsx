import EntryCard from './Cards/Cards'

import { StyledH2 } from '../../styles/typography'
import { StyledList } from './StyledList'

const List = ({ entryList, setEntryList }) => {
    const removeCard = (cardID) => {        
        setEntryList((entryList) => entryList.filter(card => card.id !== cardID))
    }    
    
    return (        
        <StyledList>
            {entryList.length ===0 ? (
                <>  
                    <StyledH2>Resumo financeiro</StyledH2>                                   
                    <StyledH2 componentColor='three' id='list__empty'>Você ainda não possui nenhum lançamento</StyledH2>
                </>
            ) : (
                <>
                <StyledH2>Resumo financeiro</StyledH2>
                <ul>
                    {entryList.map((card) => {
                        return (
                            <EntryCard key={card.id} card={card} removeCard={removeCard}/>
                        )
                    })}
                </ul>
                </>
            )}            
        </StyledList>
    )
}

export default List