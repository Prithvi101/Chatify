import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../Firebase'
import { getAuth, signInWithRedirect } from "firebase/auth";
function Login() {

    function signIn() {
        const auth = getAuth();
        signInWithRedirect(auth, provider);

    }

    return (
        <LoginContaner>
            <LoginInnerContaner>
                <img src="https://www.steel-eye.com/hubfs/Slack%20Logo.png" alt="" />
                <h1>Sign in to the Chat</h1>
                <p>www.chatforall.com</p>
                <Button onClick={signIn} >Sign in with Google</Button>
            </LoginInnerContaner>
        </LoginContaner>
    )
}

export default Login

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

