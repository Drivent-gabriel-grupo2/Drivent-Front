import { BiErrorCircle } from 'react-icons/bi';
import styled from 'styled-components';

function ErrorScreen({ message, details }) {
    return (
        <ErrorDiv>
            <ErrorMessage>
                <BiErrorCircle />
                <h1>{message}</h1>
            </ErrorMessage>
            {details && <p>{details}</p>}
        </ErrorDiv>
    );
}

const ErrorDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    > p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #8e8e8e;
    }
`;

const ErrorMessage = styled.div`
    > svg {
        font-size: 100px;
        color: #ff0000;
    }
    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        color: #000000;
        margin-left: 50px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export default ErrorScreen;
