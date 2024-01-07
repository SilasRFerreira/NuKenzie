import Form from './Form/Form'
import { StyledEntrySection } from './StyledEntrySection'
import TotalMoney from './TotalMoney/TotalMoney'

const EntrySection = ({setEntryList, entryList}) => {
    return (
        <StyledEntrySection>
            <Form setEntryList={setEntryList} />
            <TotalMoney entryList={entryList}/>
        </StyledEntrySection>
    )
}

export default EntrySection