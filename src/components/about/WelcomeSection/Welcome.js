import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
    return (
        <WelcomeStyled>
            <div className="welcome mt-5">
                <h1 className='text-center my-5'>Welcome to Our Website</h1>
                <p className=' my-3'>We have a team of talented Course Instructors, They are highly skilled and currently leading Developers of the Industries, Will be working to make your wishes come true to become a Proffesional Developer. You are going to learn about their experience as well as Real time developing skills. The courses will be taken on live classes. The recorded video of live class will be provided after the class also there will be tasks for every individual student.</p>
            </div>
            
        </WelcomeStyled>
    );
};

const WelcomeStyled = styled.div`
    h1 {
        font-weight: 600;
    }
    p {
        font-weight: 600;
    }
`;

export default Welcome;