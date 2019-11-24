import React from 'react';
import logo from "../images/logo.svg";
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
class Login extends React.Component {
    render() {
        return (
            <MainComponent>
                <div className="main-logo-container">
                    <div className="header-top">
                        <Logo src={logo} alt="logo"/>
                    </div>
                    <LoginForm/>
                </div>
            </MainComponent>
        );
    }

}

export default Login;

// Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;   
`;

const MainComponent = styled`
.main-login-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(../images/bg.jpg) no-repeat center center/cover;
}

@media (max-width: 640px) {
  .main-login-container {
    background: #000;
  }
}

.main-login-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: inset 70px 50px 190px #000, inset -70px -50px -190px;
}

.header-top {
  position: relative;
  height: 10rem;
  z-index: 1;
}


`;
