import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
//AiOutlineCloseCircle
//#CC6666

export default function CardMainComponet() {
    return (
        <CardMain>
            <div>
                <h2>Minecraft: montando o PC ideal</h2>
                <p>09:00 - 10:00</p>
            </div>
            <Rigth>
                <Line></Line>
                <div>
                    <AiOutlineCheckCircle color={'#078632'} />
                    <p>Inscrito</p>
                </div>
            </Rigth>
      </CardMain>
    );
};

const CardMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
  height: 79px;
  padding: 10px;
  background: #D0FFDB;
  border-radius: 5px;
`;

const Rigth = styled.div`
  display: flex;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-
  }
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  margin: 0px 18p;
  background: #99E8A1;
`;
