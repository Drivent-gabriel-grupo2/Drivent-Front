import styled from 'styled-components';
import { BiUser } from 'react-icons/bi';

export default function RoomCard({ id, name, capacity, selectedRoom, setSelectedRoom }) {
    const isSelected = selectedRoom === id;
    function cardClicked(id) {
        setSelectedRoom(id);
    };

    let arr = [];
    for (let i = 0; i < capacity; i++) {
        arr.push(1);
    }

    return (
        <SingleCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : 'white' }}>
            <h5>{name}</h5>
            <p>
                {arr.map((item, index) => (
                    <BiUser color = "black"></BiUser>
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
