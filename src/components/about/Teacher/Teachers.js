import React from 'react';
import styled from 'styled-components';
import TeachersData from '../../../hooks/TeachersData';

const Teachers = () => {
    const [teachers] = TeachersData();
    return (
        <TeachersStyled>
            <h3 className='mt-5 text-center'>Our Developers</h3>
            <hr />
            <div className="team">
                {
                    teachers.map(teacher => 
                        <div className='teacher-card' key={teacher.key}>
                            <div className="left">
                                <img src={teacher.image} alt="" />
                            </div> 
                            <div className="right">
                               <div className="details">
                                <h3>{teacher.name}</h3>
                                <h5>Proffession: {teacher.proffession}</h5>
                                <h5>Experience: {teacher.experience} years</h5>
                               </div>
                                <div className="icon">
                                <i class="fab fa-facebook-square fa-3x"></i>
                                <i class="fab fa-twitter-square fa-3x"></i>
                                <i class="fab fa-github-square fa-3x"></i>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </TeachersStyled>
    );
};

const TeachersStyled = styled.div`
    h1{
        font-weight: 600;
    }
    hr{ 
        margin: auto;
        width: 150px;
        border: 1px solid gray;
        border-radius: 10px;
    }
    .team {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        .teacher-card {
            margin-top: 30px;
            display: flex;
            .left {
                img {
                width: 200px;
                height: 200px;
                border-radius: 50%;
            }
            }
            .right {
                margin-top: 20px;
                margin-left: 10px;
                .details {
                    margin-left: 30px;
                }
                .icon {
                    display: flex;
                     justify-content: center;
                     align-items: center;
                     i {
                         margin: 15px;
                     }
                     i:hover {
                        color: #428a91;
                        transition: all ease-in-out 0.7s;
                     }
                }
            }
        }
        .teacher-card:hover {
            /* background-color: #abb8b7;  */
            background-color: #cad8af; 
            border: 1px solid #666768;
            border-radius: 10px;
            transition: all ease-in-out 0.5s;
        }
    }
`;

export default Teachers;