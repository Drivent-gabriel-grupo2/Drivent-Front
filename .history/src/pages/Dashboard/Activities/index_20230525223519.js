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
          <Conteiner>
            <CardMain>
              <div>
                <h2>Minecraft: montando o PC ideal</h2>
                <p>09:00 - 10:00</p>
              </div>
              <Line>linha</Line>
              <div>
                icon
                <sapn>Inscrito</sapn>
              </div>
            </CardMain>
          </Conteiner>
          <Conteiner>
            <CardSide >
              <div>
                <h2>Minecraft: montando o PC ideal</h2>
                <p>09:00 - 10:00</p>
              </div>
              <Line></Line>
              <div>
                icon
                <sapn>Inscrito</sapn>
              </div> 
            </CardSide >                                                                  
          </Conteiner>
          <Conteiner>
            <CardWorkshop>
              <div>
                <h2>Minecraft: montando o PC ideal</h2>
                <p>09:00 - 10:00</p>
              </div>
              <Line></Line>
              <div>
                icon
                <sapn>Inscrito</sapn>
              </div>
            </CardWorkshop>
          </Conteiner>
        </Section>
      </div>
    </ConteinerActivities>
  );
}

const ConteinerActivities = styled.div`
  padding: 24px, 34px;
  h1{
    margin-bottom;
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
const CardMain = styled.div`
  display: flex;
  width: 265px;
  height: 79px;
  padding: 10px;
  background: #D0FFDB;
  border-radius: 5px;
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  margin: 0px 18p;
  background: #99E8A1;
`;

const CardSide = styled.div`
  width: 265px;
  height: 168px;
  padding: 10px;
  background: #F1F1F1;
  border-radius: 5px;
`;

const CardWorkshop = styled.div`
  display: flex;
  width: 265px;
  height: 79px;
  padding: 10px;
  background: #D0FFDB;
  border-radius: 5px;
`;
