import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="container container-sm  header">
                <div className="logo">
                    <h1>ORBITECH360</h1>
                </div>
            <div className="navigation">
                <NavLink className='link' to="/home">Home</NavLink>
                <NavLink className='link' to="/about">About</NavLink>
                <NavLink className='link' to="/courses">Course</NavLink>
                <NavLink className='link' to="/contact">Contact</NavLink>
            </div>
            <div className="search-field">
                <input type="text" className="mt-1 w-50" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                <button className='btn btn-s'>Search</button>
            </div>
            </div>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.nav`
/* background-color: rgba(88, 85, 86, .5); */
background-color: #91b891;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            h1 {
                font-size: 40px;
                font-weight: 900;
                color: #023f02;
            }
        }
        .link {
            margin: 20px;
            font-size: 20px;
            font-weight: 700;
            text-decoration: none;
            color: #32411b;
        }

        .link:hover {
            color: greenyellow;
        }
        .search-field{
            display: flex;
            input {
                height: 33px;
            }
            .btn-s {
                margin-top: 4px;
                background-color: #023f02;
                color: White;
                height: 33px;
            }

        }
    }

`;

export default Header;