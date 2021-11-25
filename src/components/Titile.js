import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
    return (
        <TitelStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitelStyled>
    )
}

const TitelStyled = styled.div`
position: relative;
margin-bottom: 40px;
h2{
    color: #023f02;
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .2rem;
    &::before {
        content: "";
        position: absolute;
        bottom: -74%;
        width: 7.4rem;
        height: .33rem;
        background-color:  rgba(25,29,43,.44);
        border-radius: 15px;
        left: 10%;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 5.3rem;
        height: .33rem;
        background-color: #023f02;
        border-radius: 15px;
        left: 0;
    }
    span {
        width: 400px;
        font-weight: 900;
        color: rgba(25,29,43,.44);
        font-size: 4rem;
        position: absolute;
        left:10%;
        top: 55%;
        z-index: -1;
    }
}
`;

export default Title