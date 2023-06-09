import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
//AiOutlineCloseCircle
//#CC6666

export default function CardSideComponet() {
    return (
        <CardSide >
            <div>
                <h3>Palestra x</h3>
                <p>09:00 - 11:00</p>
            </div>
            <Rigth>
                <Line></Line>
                <div>
                    <AiOutlineCheckCircle color={'#078632'} fontSize={20}  />
                    <p>27 vagas</p>
                </div>
            </Rigth>
      </CardSide > 
    );
};

const CardSide = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 265px;
  height: 168px;
  padding: 10px;
  background: #F1F1F1;
  border-radius: 5px;
`;

const Rigth = styled.div`
  display: flex;
  gap: 5px;
  div{
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  margin: 0px 18p;
  background: #99E8A1;
`;
