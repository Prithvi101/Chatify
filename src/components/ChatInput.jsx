import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth, db, serverStamp } from '../Firebase';

function ChatInput({ channelName, channelId, chatRef }) {
    const [user, loading, error] = useAuthState(auth);

    const [input, setInput] = useState('');
    async function sendMessege(e) {
        console.log(channelId);
        e.preventDefault();
        if (!channelId) {
            return false
        }


        const subColRef = collection(db, 'rooms', channelId, 'messege');
        await addDoc(subColRef, {
            messege: input,
            timestamp: serverStamp.now(),
            user: 'prithvi',
            userImage: user.photoURL
        });
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput('');

    }


    return (
        <ChatInputContainer>
            <form action="">
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`Messege to ${channelName}`} />
                <button type='submit' onClick={sendMessege} ></button>
            </form>

        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form{
        bottom: 30px;
        width: 100%;
        position: fixed;
        display: flex;
        align-items: center;
    }
    >form > input{
        margin-left: 40px;
        width: 60%;
        border: 1px solid var(--slack-color);
        border-radius: 30px;
        padding: 20px;
        outline: none;
    }
    >form > button{
        display: none;
    }


`;