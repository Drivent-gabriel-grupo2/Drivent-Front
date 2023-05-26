import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/a';
//AiOutlineCloseCircle

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

const Line = styled.div`
  width: 1px;
  height: 100%;
  margin: 0px 18p;
  background: #99E8A1;
`;
