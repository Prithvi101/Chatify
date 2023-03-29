import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import SidebarOption from './SidebarOption';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { db, database, auth } from '../Firebase'

import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

function SideBar() {
    const [user, l, e] = useAuthState(auth);

    const [value, loading, error] = useCollection(collection(db, 'rooms'), {
        snapshotListenOptions: {
            includeMetadataChanges: true
        }
    });
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.email}
                    </h3>
                </SideBarInfo>
                <CreateIcon></CreateIcon>
            </SideBarHeader>

            <SidebarOption Icon={ChatBubbleRoundedIcon} title={"Thread"}></SidebarOption>
            <SidebarOption Icon={InboxRoundedIcon} title={"Mention & Reactions"}></SidebarOption>
            <SidebarOption Icon={DraftsRoundedIcon} title={"Saved items"}></SidebarOption>
            <SidebarOption Icon={BookmarkRoundedIcon} title={"Channer browser"}></SidebarOption>
            <SidebarOption Icon={PeopleAltRoundedIcon} title={"People & user groups"}></SidebarOption>
            <SidebarOption Icon={AppsRoundedIcon} title={"Apps"}></SidebarOption>
            <SidebarOption Icon={FileCopyRoundedIcon} title={"File browser"}></SidebarOption>
            <SidebarOption Icon={ExpandLessRoundedIcon} title={"Show less"}></SidebarOption>
            <hr />
            <SidebarOption Icon={ExpandMoreRoundedIcon} title={"Show more"}></SidebarOption>
            <hr />
            <SidebarOption
                Icon={AddBoxRoundedIcon}
                addChannelOption="addChannelOption"
                title={"Add Channel"}></SidebarOption>

            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <h2>Channels Loading...</h2>}
            {
                value && (value.docs.map((doc) => (

                    <SidebarOption
                        key={doc.id}
                        id={doc.id}
                        Icon={ChatBubbleRoundedIcon}
                        title={doc
                            .data()
                            .name} />
                )))
            }

        </SideBarContainer>

    )
}

export default SideBar

const SideBarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    max-width: 260px;
    margin-top: 60px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

    ::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b
    }



`;
const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b ;
    padding: 13px; 
    >.MuiSvgIcon-root{
        padding: 8px;
        color:var(--slack-color);
        background-color: white;
        border-radius: 999px;
        margin-left: auto;
        margin-right: 30px;
    }
`;
const SideBarInfo = styled.div`
    flex: 1;

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 5px;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
    }

    >h3 >.MuiSvgIcon-root{
        font-size: 14px;
        color:green;
        border-radius: 999px;
        margin-top: 1px;
        margin-right: 2px;
    }


`;