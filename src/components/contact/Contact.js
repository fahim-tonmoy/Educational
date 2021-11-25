import React from 'react'
import styled from 'styled-components';
import Title from '../Titile';
import PrimaryButton from './contactItem/PrimaryButton';

import ContactItem from './contactItem/ContactItem';

const Contact = () => {
    const phone = <i class="fas fa-phone-square-alt"></i>
    const location = <i class="fas fa-street-view"></i>
    const email = <i class="fas fa-envelope"></i>
    return (
        <div className='container'>
                <ContactPageStyle>
            <div className="text">
            <Title title={'Contact'} span={'Contact'}/>
            </div>
                    <div className="contact-title">
                        <h1 className='text-center'>Get In Touch</h1>
                        <hr />
                    </div>
                    <div className="contact-section">
                        <div className="left-content">
                            <form className='form'>
                                <div className="form-field">
                                    <label htmlFor="name"  >Enter Your Name</label>
                                    <input type="text" id='name'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email"  >Enter Your Email</label>
                                    <input type="email" id='email'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="subject"  >Enter Your subject</label>
                                    <input type="text" id='subject'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="text-area">Enter your Message</label>
                                    <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                                </div>
                                <div className="form-field">
                                    <PrimaryButton title={'Send Email'}/>
                                </div>
                            </form>
                        </div>
                        <div className="right-content">
                            <ContactItem 
                                icon={phone} 
                                title={'Phone'}
                                contact1={'+8801688290597'}
                                contact2={'+8801727465381'}
                            />
                            <ContactItem 
                                icon={email} 
                                title={'Email'}
                                contact1={'fht801@gmail.com'}
                                contact2={'hasan.fahiim@gmail.com'}
                            />
                            <ContactItem 
                                icon={location} 
                                title={'Address'}
                                contact1={'uttara, Dhaka'}
                                // contact2={'hasan.fahiim@gmail.com'}
                            />
                        </div>
                    </div>
                </ContactPageStyle>
        </div>
    )
} 


const ContactPageStyle = styled.section`
    margin-bottom: 80px;
    .text {
        display: flex;
        margin: 20px 0 40px 40px;
    }
    .contact-title{
            h4{
                /* color: red; */
                padding: 1rem 0;
                font-size: 1.8rem;
            }
            hr{ 
            margin: auto;
            width: 150px;
            border: 1px solid gray;
            border-radius: 10px;
        }
        }
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .form {
            width: 100%;
            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: white;
                    padding: 0 .5rem;
                    color: inherit;
                }
                input {
                    border: 1px solid gray;
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea {
                    background-color: transparent;
                    border: 1px solid gray;
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;

export default Contact;