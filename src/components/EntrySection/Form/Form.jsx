import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { StyledParagraph } from '../../../styles/typography'

import { StyledForm } from './StyledForm';

const Form = ({setEntryList}) => {     
    const [purchasDescription, setPurchasDescription] = useState('');
    const [purchaseValue, setPurchaseValue] = useState('');
    const [purchaseType, setPurchaseType] = useState('Entrada');    
    const [failText, setFailText] = useState('')


    const addEntry = () => {
        if ((purchasDescription === '') || (purchaseValue ==='')) {
            setFailText('Preencha todos os campos')
            setTimeout(() => {
                setFailText('');
            }, 4000);
        } else {
            const entry = {
                id: uuidv4(),
                purchasDescription,
                purchaseValue,
                purchaseType
            }
            setEntryList((entryList) => [...entryList, entry])
        }
        
    }

    const submit = (event) =>{
        event.preventDefault();
        
        addEntry();

        setPurchasDescription('');
        setPurchaseValue('');
        setPurchaseType('Entrada');
    }
    

    return (
        <StyledForm onSubmit={submit} >
            <fieldset >                
                <label htmlFor='purchase__description'>Descrição</label>
                <input                     
                    type='text' 
                    value={purchasDescription}
                    onChange={(event) => setPurchasDescription(event.target.value)}
                    id='purchase__description' 
                    placeholder='Digite aqui sua descrição'                    
                />                
                <StyledParagraph componentColor='three'>Ex: Compra de roupas</StyledParagraph>
            </fieldset>
            <fieldset>
                <label htmlFor='purchase__value'>Valor (R$)</label>
                <input 
                    type='number' 
                    value={purchaseValue}
                    onChange={(event) => setPurchaseValue(event.target.value)}
                    id='purchase__value' 
                    placeholder='1'                    
                />
            </fieldset>
            <fieldset>
                <label htmlFor='purchase__type'>Tipo de valor</label>
                <select value={purchaseType} id='purchase__type' onChange={(event) => setPurchaseType(event.target.value)}>
                    <option value='Entrada'>Entrada</option>
                    <option value='Saída'>Saída</option>
                </select>
            </fieldset>
            <StyledParagraph id='failToast'>{failText}</StyledParagraph>
            <button type='submit'>Inserir o valor</button>
        </StyledForm>
    )
}

export default Form