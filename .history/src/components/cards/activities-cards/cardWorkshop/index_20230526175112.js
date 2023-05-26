import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
//AiOutlineCloseCircle
//#CC6666

export default function CardWorkShopComponet() {
    return (
        <CardWorkshop>
            <div>
                <h2>Palestra y</h2>
                <p>09:00 - 11:00</p>
            </div>
            <div>
                <Line></Line>
                <div>
                    <AiOutlineCheckCircle color={'#078632'} />
                    <p>Inscrito</p>
                </div>
            </div>
      </CardWorkshop>
    );
};

const CardWorkshop = styled.div`
  display: flex;
  justify-content: space-between;
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
