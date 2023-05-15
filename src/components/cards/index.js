import styled from 'styled-components';

export default function CardTicket({ ticket, setSelectedTicket, selectedCardType, setSelectedCardType }) {
  const isSelected = selectedCardType === ticket.id;
  function cardClicked(ticket) {
    setSelectedTicket(ticket);
    setSelectedCardType(ticket.id);
  };

  return (
    <ConteinerCard onClick={() => cardClicked(ticket)} style={{ background: isSelected ? '#FFEED2' : '#FFFF' }}>
      <p>{ticket.isRemote ? 'Online' : 'Presencial'}</p>
      <span>R$ {ticket.price}</span>
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
