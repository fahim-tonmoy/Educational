import React from 'react';
import styled from 'styled-components';
import UseDatas from '../../../hooks/UseDatas';

const Course = () => {
    const [datas] = UseDatas();
    return (
        <CourseStyled>
            {
                datas.map(data => 
                    <div className="course-data" key={data.key}>
                        <img src={data.image} alt="" />
                        <div className="details">
                            <h3>{data.courseName}</h3>
                            <h5>Enrolled : {data.enrolled} students</h5>
                            <h5>Price : {data.price} <span>৳</span> </h5>
                            <h5>Duration : {data.duration} hours</h5>
                            <div className="buttons">
                            <button className='enroll'>Enroll Now</button> 
                            <button className='preview'>Previvew</button> 
                            </div>
                        </div>
                    </div>
                )
            }
        </CourseStyled>
    );
};

const CourseStyled = styled.div`
    display: grid;
    grid-template-columns: repeat( 3, 1fr );
    .course-data {
        margin-top: 20px;
        width: 300px;
        img {
            width: 100%;
            height: 150px;
            border-radius: 10px;
        }
       .details {
       margin-left: 10px;
        h3 {
            margin-top: 10px;
            font-size: 24px;
        }
        span{
            font-size: 28px;
        }
        .buttons {
        button{
            border-radius: 5px;
            margin-bottom: 10px;
            margin-right: 10px;
            border: none;
        }
        .enroll:hover {
            background-color: #75d675;
            transition: all ease-in-out .5s;
         }
         .preview:hover {
            background-color: #77b8ee;
            transition: all ease-in-out .5s;
        }
        }
       }
    }
    .course-data:hover {
        box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        transition: all ease-in-out .5s;
        
    }

`;

export default Course;