import styled from 'styled-components';
import { BiUser } from 'react-icons/bi';

export default function RoomCard({ id, name, capacity, booking, selectedRoom, setSelectedRoom }) {
    const isSelected = selectedRoom === id;
    function cardClicked(id) {
        setSelectedRoom(id);
    };
    let allSpots = [];
    for (let i = 0; i < capacity; i++) {
        allSpots.push(1);
    }
    let ocupiedSpots = [];
    for (let i = 0; i < booking; i++) {
        ocupiedSpots.push(1);
    }
    let availableSpots = [];
    for (let i = 0; i < capacity - booking; i++) {
        availableSpots.push(1);
    }
    let availableSpotsWhenSelecting = [];
    for (let i = 0; i < capacity - booking - 1; i++) {
        availableSpotsWhenSelecting.push(1);
    }
    let selectingSpot = [1];

    if (booking === capacity) {
        return (
            <SingleCard style={{ background: '#E9E9E9' }}>
                <h5>{name}</h5>
                <p>
                    {
                        allSpots.map((item, index) => (
                            <BiUser key={index} color='#8C8C8C'></BiUser>
                        ))
                    }
                </p>
            </SingleCard>
        );
    }

    if (isSelected) {
        return (
            <SingleCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : 'white' }}>
                <h5>{name}</h5>
                <p>
                    {
                        selectingSpot.map((item, index) => (
                            <BiUser key={index} color='#FF4791'></BiUser>
                        ))
                    }
                    {
                        availableSpotsWhenSelecting.map((item, index) => (
                            <BiUser key={index} color='black'></BiUser>
                        ))}
                    {
                        ocupiedSpots.map((item, index) => (
                            <BiUser key={index} color="red"></BiUser>
                        ))}
                </p>
            </SingleCard>
        );
    }

    return (
        <SingleCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : 'white' }}>
            <h5>{name}</h5>
            <p>
                {
                    availableSpots.map((item, index) => (
                        <BiUser key={index} color={isSelected ? '#FF4791' : 'black'}></BiUser>
                    ))}
                {
                    ocupiedSpots.map((item, index) => (
                        <BiUser key={index} color="red"></BiUser>
                    ))}
            </p>
        </SingleCard>
    );
}

const SingleCard = styled.div`
    display: flex;
    width: 190px;
    height: 45px;
    border: 1px solid #CECECE;
    border-radius: 10px;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 16px 0px 16px;
    h5{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #454545;
    }
`;
