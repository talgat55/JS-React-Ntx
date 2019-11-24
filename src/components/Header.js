import React from 'react';
import logo from '../images/logo.svg';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './Button';
class Header extends React.Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" />
                    <NavLink to="/login" className="sign-in-btn">
                        Sign In
                    </NavLink>
                </div>

                <div className="header-content">
                    <Title>
                        See what`s next.
                    </Title>
                    <SubTitle>
                        WATCH ANYWHERE. CANCEL ANYTIME.
                    </SubTitle>
                    <Button className="main-offer-btn" primary>
                        try it now
                    </Button>

                </div>
            </HeaderComponent>
        );
    }
}
export default  Header;
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,-50%); 
`;

const HeaderComponent = styled.div`
  .sign-in-btn{
    right: 0;
    margin: 1.123rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: red;
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition:  background .2s ease-in-out;
    &:hover {
      background: var(--main-red-hover);
    }
  }
  
  
  // Header top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }
  
  // Header Content
  
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.55rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
    
  }
  
  // btn
  
  //.main-offer-btn{
  //  display: inline-block;
  //  background: var(--main-red);
  //  text-transform: uppercase;
  //  border: none;
  //  outline: none;
  //  margin: 0 33%;
  //  padding: 1.5rem;
  //  border-radius: 0.1875rem;
  //  font-size: 2rem;
  //  text-align: center;
  //  box-shadow: 0 1px 0 rgba(0,0,0,0.45);
  //  transition:  background 0.2s ease-in;
  //  cursor: pointer;
  //  
  //  &:hover{
  //    background:  var(--main-red-hover);
  //  }
  //  
    
  }
  
  
`;


const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;

`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-decoration: uppercase;

`;