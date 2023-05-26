import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
//AiOutlineCloseCircle
//#CC6666

export default function CardWorkShopComponet() {
    return (
        <CardWorkshop>
            <div>
                <h3>Palestra y</h3>
                <p>09:00 - 11:00</p>
            </div>
            <Rigth>
                <Line></Line>
                <div>
                    <AiOutlineCheckCircle color={'#078632'} fontSize={20}  />
                    <p>Inscrito</p>
                </div>
            </Rigth>
      </CardWorkshop>
    );
};

const CardWorkshop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 265px;
  height: 79px;
  padding: 10px;
  background: #D0FFDB;
  border-radius: 5px;
  h3{
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    color: #343434;
  }
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #343434;
  }
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
