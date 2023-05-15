import styled from 'styled-components';

export default function HotelCard({ hotel, setHotelId, selectedHotel, setSelectedHotel }) {
    const isSelected = selectedHotel === hotel.id;
    function cardClicked(id) {
        setHotelId(id);
        setSelectedHotel(id);
    }

    function availableRooms(rooms) {
        let capacities = 0,
            bookings = 0;
        rooms.forEach((room) => {
            capacities += room.capacity;
            bookings += room.Booking.length;
        });
        return capacities - bookings;
    }

    const possibleOptions = ['Single', 'Double', 'Triple'];
    const acomodationTypes = [];

    hotel.Rooms.map((item) => {
        if (!acomodationTypes.includes(item.capacity)) acomodationTypes.push(item.capacity);
    });

    acomodationTypes.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (let i = 0; i < acomodationTypes.length; i++) {
        acomodationTypes[i] = possibleOptions[acomodationTypes[i] - 1];
    }

    let string = '';

    if (acomodationTypes.length < 3) string = acomodationTypes.join(' e ');
    else {
        string = `${acomodationTypes[0]}, ${acomodationTypes[1]} e ${acomodationTypes[2]}`;
    }

    return (
        <ConteinerCard onClick={() => cardClicked(hotel.id)} style={{ background: isSelected ? '#FFEED2' : '#EBEBEB' }}>
            <img src={hotel.image}></img>
            <p>{hotel.name}</p>
            <h3>Tipos de acomodação:</h3>
            <h2>{string}</h2>
            <h3>Vagas disponíveis:</h3>
            <h2>{availableRooms(hotel.Rooms)}</h2>
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
    p {
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
