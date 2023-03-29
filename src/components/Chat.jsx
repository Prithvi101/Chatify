import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { selectRoomId } from '../features/appSlice';
import { collection, doc, getDoc, orderBy, query } from 'firebase/firestore';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../Firebase';
import { async } from '@firebase/util';
import { getDatabase } from 'firebase/database';
import Messege from './Messege';
import Spinner from 'react-spinkit';


function Chat() {

    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId)
    const [channelName, loading, error] = useDocument(
        roomId &&
        doc(db, 'rooms', roomId),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const [roomMesseges, l, e] = useCollection(
        roomId &&
        query(collection(db, 'rooms', roomId, 'messege'), orderBy("timestamp"))
    );

    useEffect(() => (
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        }

        )
    ), [channelName, l])



    //console.log(roomMesseges)



    // const docRef = doc(db, "cities", roomId);
    // const docSnap = getDoc(docRef).then(doc => (
    //     console.log(doc)
    // ));

    // const [value1, loading1, error1] = useDocument(roomId && doc(db, 'rooms', roomId));

    // const [value, loading, error] = useCollection(collection(db, 'rooms'), {
    //     snapshotListenOptions: {
    //         includeMetadataChanges: true
    //     }
    // });

    // { value && console.log(JSON.stringify(value1.data())) }



    // const subColRef = collection(db, 'rooms', roomId, 'messege');
    // const [roomMesseges] = useDocument(subColRef, orderBy("timestamp", 'asc'));

    return (
        <ChatContainer>

            <ChatMesseges>

                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {roomMesseges && roomMesseges?.docs.map((docs, index) => {
                    const { messege, timestamp, user, userImage } = docs.data();
                    return (
                        <Messege
                            key={index}
                            messege={messege} timestamp={timestamp} user={user} userImage={userImage}
                        />
                    );
                })}


            </ChatMesseges>
            <ChatBottom ref={chatRef} ></ChatBottom>
            <ChatInput chatRef={chatRef} channelId={roomId} channelName={channelName?.data().name} >
            </ChatInput>
        </ChatContainer>
    )
}

export default Chat

const ChatMesseges = styled.div`


`;

const ChatBottom = styled.div``;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgrey;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    >h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 2px;

    }
    .MuiSvgIcon-root{
        margin-left: 2px;
        font-size: 25;
    }

`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    >p{
        display: flex;

    }
    .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 22px;
    }

`;

const ChatContainer = styled.div`

    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    margin-bottom: 80px;
    color: black;
 
`;
