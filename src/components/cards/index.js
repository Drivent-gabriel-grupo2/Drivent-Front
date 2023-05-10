import styled from 'styled-components';

export default function Card() {
  return (
    <ConteinerCard color='color'>
      <p>Presencial</p>
      <span>R$ 250</span>
    </ConteinerCard>
  );
};

const ConteinerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 145px;
    background:#ffeed2;
    border: 1px solid #CECECE;
    border-radius: 20px;
    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: #454545;
    }
    span{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #898989;
    }
`;
