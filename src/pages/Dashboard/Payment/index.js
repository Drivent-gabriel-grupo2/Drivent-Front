import Card from '../../../components/cards';
import styled from 'styled-components';

export default function Payment() {
  return (
    <ConteinerPayment>
      <h1>Ingresso e pagamento</h1> 
      <div>
        <p>Primeiro, escolha sua modalidade de ingresso</p>
        <UlPrice>
          <Card/>
          <Card/>
        </UlPrice>
      </div>
      <div>
        <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
        <UlPrice>
          <Card/>
          <Card/>
        </UlPrice>
      </div>
      <div>
        <p>Fechado! O total ficou em R$ 600. Agora é só confirmar:</p>
        <button>RESERVAR INGRESSO</button>
      </div>
    </ConteinerPayment>
  );
}

const ConteinerPayment = styled.div`
  div{
    margin: 30px 0px 0px 0px;
  }
  button{
    width: 162px;
    height: 37px;
    background: #E0E0E0;
    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  h1{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    color: #000000;
  }
  p{
    margin-bottom: 12px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #8E8E8E;
  }
`;

const UlPrice = styled.ul`
  display: flex;
  gap: 24px
`;

