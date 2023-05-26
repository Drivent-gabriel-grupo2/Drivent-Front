import styled from 'styled-components';

export default function cardActivitie() {
    return <CardActiv>Sexta, 22/10</CardActiv>;
};

const CardActiv = styled.li`
    width: 131px;
    height: 37px;

    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
`;
