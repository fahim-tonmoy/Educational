import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UseDatas from '../../../hooks/UseDatas';

const Course = () => {
    const [datas] = UseDatas();
    return (
        <CourseStyled>
            <div className="container course-box my-4">
                {/* <h1 className='text-center text-uppercase my-3'>Our Courses</h1> */}
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-md-6 col-sm-12 my-3 left-container">
                        {
                            datas.map(data => 
                                <img className='m-2' src={data.image} alt='' width="120" height="60"/>
                            )
                        }
                    </div>
                    <div className="col-md-6 col-sm-6 right-container ">
                        <h3 className='text-center text-uppercase'>Our available courses</h3>
                        <hr  />
                        <p>These are all the courses we're offring now. <br />
                           Grab your course fast!! Registation Will be closing Soon. <br />
                           Feel free to give a visite to our <span> <Link className='link' to="/courses">Course</Link> </span> Page and learn more about the courses.</p>
                    </div>
                </div>
            </div>
        </CourseStyled>
    );
};

const CourseStyled = styled.div`
 background-color: white;
 .course-box {
    margin-top: 30px;
    margin-bottom: 30px;
 }
 h1, h3{
     font-weight: 700;
 }
    .left-container{
        img{
            border-radius: 5px;
        }
    }
    .right-container{
        hr{ 
            margin: auto;
            width: 150px;
            border: 1px solid gray;
            border-radius: 10px;
        }
        p {
            margin: 30px 0;
            font-size: 18px;
            text-align: center;
            font-weight: 600;
            span {
                .link {
                    font-weight: 700;
                color: green!important;
                text-decoration: none!important;
                }
            }
        }
    }
`;

export default Course;