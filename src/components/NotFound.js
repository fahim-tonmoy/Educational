import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <NotFoundStyled>
            <h1 className='text-center'>404</h1>
            <h2 className='text-center'>Page Not Found</h2>
        </NotFoundStyled>
    );
};

const NotFoundStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 90vh;
h1{
    font-size: 70px;
    font-weight: 900;
}
h2{
    font-size: 40px;
    font-weight: 600;
}
`;

export default NotFound;