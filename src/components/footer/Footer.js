import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
            <p className='text-center'> &copy; All Rights Reserved by <a rel="noreferrer" target="_blank" href="https://www.facebook.com/fahim.hasan801/" > ORBITECH360 </a></p>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
p{
    font-size: 18px;
    margin: 10px;
    font-weight: 500;
    a {
        text-decoration: none;
        font-weight: 700;
        color: #4e944e;
    }
    a:hover {
        color: #378cb4;
    }
}
`;

export default Footer;