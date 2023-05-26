import styled from 'styled-components';
import CardActivitie from '../../../components/cards/activities-cards';
import CardMainComponet from '../../../components/cards/activities-cards/cardMain';
import CardSideComponet from '../../../components/cards/activities-cards/cardSide';
import CardWorkShopComponet from '../../../components/cards/activities-cards/cardWorkshop';

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
          <Conteiner>
            <CardMainComponet />
          </Conteiner>
          <Conteiner> 
            <CardSideComponet/>                                                                
          </Conteiner>
          <Conteiner>
            <CardWorkShopComponet/>
          </Conteiner>
        </Section>
      </div>
    </ConteinerActivities>
  );
}

const ConteinerActivities = styled.div`
  padding: 24px, 34px;
  h1{
    margin-bottom: 20px;
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
  ul{
    display: flex;
    gap: 17px;
    margin-bottom: 60px;
    margin-top: 20px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 60px;
`;

const Section = styled.div` 
  display: flex;
  width: 100%;
  height: 390px;
  border: 1px solid #D7D7D7;
`;

const Conteiner = styled.div`
  width: 288px;
  height: 100%;
  padding: 9px;
  border: 1px solid #D7D7D7;
`;

