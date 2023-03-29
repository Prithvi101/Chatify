import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';

function Header() {

    const [user, loading, error] = useAuthState(auth);
    console.log()

    return (
        <HeaderContainer>
            {/* Header Left */}

            <HeaderLeft>
                <HeaderAvatar onClick={() => auth.signOut()} src={!loading ? user?.photoURL : ""} ></HeaderAvatar>
                <HeaderTime></HeaderTime>
            </HeaderLeft>
            {/* Header Search */}
            <HeaderSearch>
                <SearchRoundedIcon />
                <input type="text" placeholder='Search' />
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineOutlinedIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

//Styling

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;
    >.MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`;





const HeaderSearch = styled.div`
    display: flex;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    flex:0.4;
    align-items: center;
    color: gray;
    border: 1px gray solid;
    >input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vh;
        outline: 0;
        color: white;
    }
`


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    >.MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
`;

const HeaderTime = styled(AccessTimeIcon)``;

