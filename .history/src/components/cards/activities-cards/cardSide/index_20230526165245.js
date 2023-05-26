import styled from 'styled-components';


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
