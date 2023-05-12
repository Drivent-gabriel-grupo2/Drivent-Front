import { useState } from 'react';
import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import paymentApi from '../../services/paymentApi';

export default function CardBox({ setConfirmedPayment }) {
    const [cardName, setcardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardExpiracy, setCardExpiracy] = useState('');
    const [focus, setFocus] = useState('');
    let issuer;

    async function toSendDataCard() {

        const visaRegex = /^4/;
        const masterRegex = /^5[1-5]/;
        const amexRegex = /^3[47]/;
        const discoverRegex = /^(6011|65|64[4-9])/;

        if(visaRegex.test(cardNumber)) issuer = 'Visa';
        if(masterRegex.test(cardNumber)) issuer = 'Mastercard';
        if(amexRegex.test(cardNumber)) issuer = 'American Express';
        if(discoverRegex.test(cardNumber)) issuer = 'Discover';



        const cardData = {
            issuer,
            number: cardNumber,
            name: cardName,
            expirationDate: cardExpiracy,
            cvv: cardCvv
        }
        setCardNumber('');
        setcardName('');
        setCardExpiracy('');
        setCardCvv('');
        try {
            await paymentApi.postCreditCardData(ticketId, cardData);
            setConfirmedPayment(true);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <PaymentBox>
            <TitleBox>
                <p>Pagamento</p>
            </TitleBox>
            <DataPayment>
                <Cards
                    cvc={cardCvv}
                    expiry={cardExpiracy}
                    focused={focus}
                    name={cardName}
                    number={cardNumber} />
                <InputsCard>
                    <input type='text' name='cardNumber' value={cardNumber} placeholder='Card Number' onChange={(e) => (setCardNumber(e.target.value))} onFocus={(e) => (setFocus(e.target.name))} />
                    <p>E . g : 49...51...36...37...</p>
                    <input type='text' name='name' value={cardName} placeholder='Name' onChange={(e) => (setcardName(e.target.value))} onFocus={(e) => (setFocus(e.target.name))} />
                    <div>
                        <input type='text' name='expiracy' value={cardExpiracy} placeholder='Valid Tru' onChange={(e) => (setCardExpiracy(e.target.value))} onFocus={(e) => (setFocus(e.target.name))} />
                        <input type='text' name='cvcCard' value={cardCvv} placeholder='CVC' onChange={(e) => (setCardCvv(e.target.value))} onFocus={(e) => (setFocus(e.target.name))} />
                    </div>
                </InputsCard>
            </DataPayment>
            <ButtonBox>
                <ButtonToSend onClick={toSendDataCard}>FINALIZAR PAGAMENTO</ButtonToSend>
            </ButtonBox>
        </PaymentBox>
    )
}

const PaymentBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 650px;
height: 350px;
`
const TitleBox = styled.div`
font-size: 20px;
color: #8E8E8E;
display:flex;
justify-content: flex-start;
margin-bottom: 10px;
width: 570px;
`
const DataPayment = styled.div`
display: flex;
justify-content: space-between; 
`
const InputsCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 30px;
input{
  width: 280px;
  height: 47px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #d3d3d3;
  margin-top: 2px;
  margin-bottom: 7px;
  padding-left: 5px;
}
p{
  font-size: 13px;
  color: #535353;
  margin-top: -8px;
  margin-left: 5px;
  margin-bottom: 15px;
}
  div{
    display: flex;
    input:nth-child(1){
      width: 170px;
      margin-right: 10px;
    }
    input:nth-child(2){
      width: 100px;
    }  
}
`
const ButtonToSend = styled.button`
width: 172px;
height: 30px;
background-color: #E0E0E0;
border-radius: 4px;
border-width: 1px;
border-color: #d3d3d3;
font-size: 10px;
font-weight: 400;
`
const ButtonBox = styled.div`
display:flex;
justify-content: flex-start;
margin-bottom: 10px;
width: 570px;
margin-top: 45px;
`