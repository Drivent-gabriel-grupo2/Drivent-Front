import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
//AiOutlineCloseCircle

export default function CardSideComponet() {
    return (
        <CardSide >
            <div>
                <h2>Palestra x</h2>
                <p>09:00 - 11:00</p>
            </div>
            <Line></Line>
            <div>
                <AiOutlineCheckCircle color={'#D0FFDB'} />
                <p>27 vagas</p>
            </div> 
      </CardSide > 
    );
};

const CardSide = styled.div`
  display: flex;
  width: 265px;
  height: 168px;
  padding: 10px;
  background: #F1F1F1;
  border-radius: 5px;
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  margin: 0px 18p;
  background: #99E8A1;
`;
