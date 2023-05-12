import check from '../../assets/images/checkvector.png';
import styled from 'styled-components';
/* eslint-disable */

export default function ConfirmedBox() {
  return (
    <ConfirmedBoxStyle>
      <Title>Pagamento</Title>
        <CheckMessageBox>
          <img src={check} />
            <div>
              <p>Pagamento confirmado!</p>
              <p>Prossiga para escolha de hospedagem e atividades</p>
            </div>
        </CheckMessageBox>
    </ConfirmedBoxStyle>
    )
}

const CheckMessageBox = styled.div`
display:flex;
align-items: center;
p{ 
 color: #454545; 
 font-size:16px; 
 margin-bottom: 0px;
}
p:nth-child(1){
   font-weight:bolder;
}
img{
 height: 40px;
 margin-right: 10px;
}
`
const ConfirmedBoxStyle = styled.div`
align-items: center;
height: 80px;
`
const Title = styled.p`
margin-bottom: 20px;
font-size: 20px;
color: #8e8e8e;
`