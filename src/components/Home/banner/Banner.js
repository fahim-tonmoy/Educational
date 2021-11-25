import React from 'react';
import styled from 'styled-components';
import banner from '../../img/banner-3.png';

const Banner = () => {
    return (
        <BannerStyled>
            <div className="container">
            <div className=" row  banner-contianer">
                <div className="left-container col-md-6  col-sm-12">
                    <h1 className='text-uppercase text-justify'> find Your Favorite Course Here </h1>
                    <h5>TOP NOTCH COURSES FROM TRAINED PROFESSIONALS</h5>
                    <button  className='btn btn-s ms-2'>Read More</button>
                </div>
                <div className="right-container col-md-6 col-sm-12">
                    <img className='img-fluid' src={banner} alt="" />
                </div>
            </div>
            </div>
        </BannerStyled>
    );
};

const BannerStyled = styled.div`
padding-top: 50px;
    .banner-contianer {
        /* display: grid;
        grid-template-columns: repeat(2, 1fr); */
        .left-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1 {
                font-size: 60px;
                font-weight: 700;
                /* text-align: center; */
            }
            h5 {
                /* margin-top: -150px; */
                font-weight: 700;
            }
            .btn-s {
                background-color: #5f5e5e;
                color: White;
                width: 150px;
            }
            .btn-s:hover {
                background-color: #023f02;
                color: #fff;
                font-weight: 600;
                width: 200px;
                height: 40px;
                transition: ease-in-out .5s;
            }
            h5, .btn-s {
                margin-top: 25px;
            }
        }
    }
`;

export default Banner;