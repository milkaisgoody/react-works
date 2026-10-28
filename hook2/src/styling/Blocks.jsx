import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-component: space-around; //space-around
`

const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.color};
    margin: 10px;
`

const Blocks = () => {
    const [clicked, setClicked] = useState(null);

    const handleclick = (color) => {
        setClicked(color)
    }
    return(
        <Wrapper>
            <Block color="#f00" 
            onClick={() => handleclick('red')}
            />
            <Block color="#0f0" 
            onClick={() => handleclick('green')}
            />
            <Block color="#00f" 
            onClick={() => handleclick('blue')}
            />
            {clicked && <p>클릭한 색상: {clicked} </ p>}
        </Wrapper>
    )
}

export default Blocks;