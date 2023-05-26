import styled from 'styled-components';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icon/ai';
//AiOutlineCloseCircle

export default function CardWorkShopComponet() {
    return (
        <CardWorkshop>
            <div>
                <h2>Palestra y</h2>
                <p>09:00 - 11:00</p>
            </div>
            <Line></Line>
            <div>
                <AiOutlineCheckCircle color={'#D0FFDB'} />
                <p>27 vagas</p>
            </div>
      </CardWorkshop>
    );
};

const CardWorkshop = styled.div`
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
