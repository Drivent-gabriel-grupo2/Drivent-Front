import styled from 'styled-components';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icon/ai';

export default function CardMainComponet() {
    return (
        <CardMain>
            <div>
                <h2>Minecraft: montando o PC ideal</h2>
                <p>09:00 - 10:00</p>
            </div>
            <Line>linha</Line>
            <div>
                <AiOutlineCheckCircle color={'#D0FFDB'} />
                <p>Inscrito</p>
            </div>
      </CardMain>
    );
};

const CardMain = styled.div`
  display: flex;
  width: 265px;
  height: 79px;
  padding: 10px;
  background: #D0FFDB;
  border-radius: 5px;
`;