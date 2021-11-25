import React from 'react';
import styled from 'styled-components';
import Banner from './banner/Banner';
import Course from './courses/Course';
import Practical from './practical/Practical';

const Home = () => {
    return (
        <HomeStyled>
            <Banner />
            <Course />
            <Practical />
        </HomeStyled>
    );
};

const HomeStyled = styled.div`
    margin: 0;
    background-color: #91b891;
`;

export default Home;