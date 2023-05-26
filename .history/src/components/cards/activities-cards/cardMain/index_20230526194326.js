import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
//BiLogIn
//AiOutlineCloseCircle
//#CC6666

export default function CardMainComponet() {
    return (
        <CardMain>
            <div>
                <h3>Minecraft: montando o PC ideal</h3>
                <p>09:00 - 10:00</p>
            </div>
            <Rigth>
                <Line></Line>
                <div>
                    <AiOutlineCheckCircle color={'#078632'} fontSize={20} />
                    <p>Inscrito</p>
                </div>
            </Rigth>
      </CardMain>
    );
};

const CardMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 265px;
  height: 79px;
  padding: 10px;
  background: #D0FFDB;
  border-radius: 5px;
`;

const Rigth = styled.div`
  display: flex;
  gap: 5px;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  margin: 0px 18p;
  background: #99E8A1;
`;
