import React from 'react'
import Spinner from 'react-spinkit';
import styled from 'styled-components';

function LoginLoad() {
    return (
        <LoginContaner>
            <LoginInnerContaner>
                <img src="https://www.steel-eye.com/hubfs/Slack%20Logo.png" alt="" />
                <Spinner></Spinner>
            </LoginInnerContaner>
        </LoginContaner>
    )
}

export default LoginLoad
const LoginContaner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f8f8;
   
`
const LoginInnerContaner = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 100px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
 > img{
        width:100px;
        margin-bottom: 40px;
    }
> Button{
    margin-top: 50px;
   
    background-color: #159895;
    color: white;
    font-weight: 800;
    :hover{
        background-color: #57C5B6;
    }
}

`