import React from 'react';
import styled from 'styled-components';
import videoImage from '../../img/img.jpg';


const Practical = () => {
    return (
        <PracticalStyled>
            <div className="container mt-5 text-center">
            <h1 className='text-uppercase'>Learn Through Practical Way</h1>
            <p className='text-justify'>We Provide Recorded video of regular classes as well as daily offline tasks. You'll be getting after class Support and two weekly sessions <br /> with the Course Instructor. There will be a mounthly conceptual Session. Also you'll get the Opportunity to talk with some leading proffessional developers during the Course.</p>
            <img src={videoImage} alt="" className='img-fluid' />
            </div>
            
        </PracticalStyled>
    );
};

const PracticalStyled = styled.div`
h1 {
    margin-top: 20px;
    font-weight: 700;
}
p {
    margin: 30px 0;
    font-size: 18px;
    text-align: center;
    font-weight: 500;
}
img {
margin: 20px 0 30px 0;
}
`;

export default Practical;