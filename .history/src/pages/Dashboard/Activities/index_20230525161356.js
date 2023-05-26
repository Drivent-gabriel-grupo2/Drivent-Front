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
    
  }
`;
