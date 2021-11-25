import React from 'react';
import styled from 'styled-components';
import Title from '../Titile';
import Course from './Course/Course';

const Courses = () => {
    return (
        <CoursesStyled>
            <div className='container'>
                <div className="text">
                    <Title title="Course" span="Course" />
                </div>
                <h1 className='text-center'>Our Available Courses</h1>
                <hr />
                <Course />
            </div>
        </CoursesStyled>
    );
};

const CoursesStyled = styled.div`
    .text {
        display: flex;
        margin: 20px 0 40px 40px;
    }
        hr{ 
            margin: auto;
            width: 150px;
            border: 1px solid gray;
            border-radius: 10px;
        }
    
`;

export default Courses;