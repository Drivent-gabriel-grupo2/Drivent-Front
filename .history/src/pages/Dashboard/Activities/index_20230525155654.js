export default function Activities() {
  return (
    <ConteinerActivities>
      <h1>Escolha de atividades</h1>
      <p>Primeiro, filtre pelo dia do evento: </p>
    </ConteinerActivities>
  );
}

const ConteinerActivities = styled.div`
  padding: 34px
  h1{
    font-family: 'Roboto'
    font-weight: 400;
    font-size: 34px;
    color: #000000;
  }
`