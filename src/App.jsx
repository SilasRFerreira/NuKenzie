import { useState } from 'react'

import Reset from './styles/reset';
import GlobalStyles from './styles/globalStyles'

import Header from './components/Header/Header'
import EntrySection from './components/EntrySection/EntrySection';
import List from './components/List/List';
import { Container } from './styles/Container';

function App() {
  const [entryList, setEntryList] = useState([])
  
  return (
    <>
      <Reset />
      <GlobalStyles />
     <Header />
    <Container>
      <main>
        <EntrySection entryList={entryList} setEntryList={setEntryList}/>
        <List entryList={entryList} setEntryList={setEntryList}/>
      </main>
    </Container>
    </>
  )
}

export default App
