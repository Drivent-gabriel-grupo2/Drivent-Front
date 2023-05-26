import styled from 'styled-components';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icon/ai';

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
