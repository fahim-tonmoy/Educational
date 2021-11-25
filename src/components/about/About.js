import React from 'react';
import styled from 'styled-components';
import Title from '../Titile';
import Teachers from './Teacher/Teachers';
import Welcome from './WelcomeSection/Welcome';

const About = () => {
    return (
        <AboutStyled>
            <div className='container'>
            <div className="text">
                <Title title="About Us" span="About us" />
            </div>

            <Welcome className="my-5" />
            <Teachers />
            </div>
            <hr />
        </AboutStyled>
    );
};

const AboutStyled = styled.div`
    .text {
        display: flex;
        margin: 20px 0 40px 40px;
    }
`;

export default About;