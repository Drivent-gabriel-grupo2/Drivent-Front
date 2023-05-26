export default function Activities() {
  return (
    <ConteinerActivities>
      <h1>Escolha de atividades</h1>
      <p>Primeiro, filtre pelo dia do evento: </p>
    </ConteinerActivities>
  );
}

const ConteinerActivities = styled.div`
  h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
/* identical to box height */


color: #000000;
  }
`