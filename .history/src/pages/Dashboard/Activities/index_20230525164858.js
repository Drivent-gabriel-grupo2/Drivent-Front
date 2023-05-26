import styled from 'styled-components';
import CardActivitie from '../../../components/cards/activities-card';

export default function Activities() {
  return (
    <ConteinerActivities>
      <h1>Escolha de atividades</h1>
      <p>Primeiro, filtre pelo dia do evento: </p>
      <ul>
        <CardActivitie/>
        <CardActivitie/>
        <CardActivitie/>
      </ul>
      <div>
        <Head>
          <p>Auditório Principal</p>
          <p>Auditório Lateral</p>
          <p>Sala de Workshop</p>
        </Head>
        <Section>
          <div></div>
          <div></div>
          <div></div>
        </Section>
      </div>
    </ConteinerActivities>
  );
}

const ConteinerActivities = styled.div`
  padding: 34px;
  h1{
    font-family: 'Roboto'
    font-weight: 400;
    font-size: 34px;
    color: #000000;
  }
  p{
    margin: 36px, 0px, 23px, 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #8E8E8E;
  }
  li{
    display: flex;
    gap: 17px;
    margin-bottom: 60px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Section = styled.div` 
  display: flex;
  width: 100%;
  height: 390px;
  border: 1px solid #D7D7D7;
  div{
    width: 288px;
    height: 100%;
    border: 1px solid #D7D7D7;
  }
`;
