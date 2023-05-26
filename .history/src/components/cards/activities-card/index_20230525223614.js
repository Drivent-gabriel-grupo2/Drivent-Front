import styled from 'styled-components';

export default function CardActivitie() {
    return <CardActiv>Sexta, 22/10</CardActiv>;
};

const CardActiv = styled.li`
    width: 131px;
    height: 37px;
    padding: 12px 2;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #000000;
`;
