import styled from 'styled-components';

export default function Card({
  ticket,
  price,
  selectedCardId,
  setSelectedCardId,
  setSelectedInPerson,
  setSelectedTicket
}) {
  const isSelected = selectedCardId === ticket.id;

  function cardClicked(ticket) {
    setSelectedInPerson(true);
    setSelectedCardId(ticket.id);
    setSelectedTicket(ticket);
  }

  return (
    <ConteinerCard onClick={() => cardClicked(ticket)} style={{ background: isSelected ? '#FFEED2' : '#FFFF' }}>
      <p>{ticket.includesHotel ? 'Com Hotel' : 'Sem Hotel'}</p>
      <span>+ R$ {price}</span>
    </ConteinerCard>
  );
}

const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #454545;
  }
  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #898989;
  }
`;
