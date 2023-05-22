import styled from 'styled-components';

export default function ReservedHotelCard({ hotel, Room }) {
    const possibleOptions = ['Single', 'Double', 'Triple'];
    const roomType = possibleOptions[Room.capacity - 1];
    
    return (
        <ConteinerCard style={{ background: '#FFEED2' }}>
            <img src={hotel.image}></img>
            <h1>{hotel.name}</h1>
            <h3>Quarto reservado:</h3>
            <h2>{Room.name} ({roomType})</h2>
            <h3>Pessoas no seu quarto:</h3>
            {Room.Booking.length > 1 ? <h2>Você e mais {Room.Booking.length - 1}</h2> : <h2>Somente você</h2>}
        </ConteinerCard>
    );
}

const ConteinerCard = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 14px;
    margin-top: 18px;
    flex-direction: column;
    width: 196px;
    height: 264px;
    border-radius: 10px;
    img {
        height: 109px;
        width: 168px;
        border-radius: 5px;
        margin-top: 2px;
        margin-bottom: 10px;
    }
    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #343434;
        margin-bottom: 10px;
        margin-left: 1px;
    }
    h3 {
        all: unset;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: 700;
        margin-left: 1px;
        margin-bottom: 4px;
        color: #3c3c3c;
    }
    h2 {
        all: unset;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        margin-left: 1px;
        margin-bottom: 16px;
        color: #3c3c3c;
    }
`;
