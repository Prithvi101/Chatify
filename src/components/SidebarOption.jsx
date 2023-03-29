import React from 'react'
import styled from 'styled-components'
import { db } from '../Firebase'
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';


function SidebarOption({ id, title, Icon, addChannelOption }) {
    const dispatch = useDispatch()



    function addChannel() {
        const channelName = prompt('Please enter the channel Name')
        if (!channelName) {
            return false;
        }
        const newCollectionRef = collection(db, "rooms");
        addDoc(newCollectionRef, {
            name: channelName,
            // add more fields as needed
        })
            .then((docRef) => {
                console.log('Document added with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });

    }

    function selectChannel() {
        // console.log("channel Selected" + id);
        if (id) {
            dispatch(
                enterRoom({
                    roomId: id,
                })
            )
        }
    }



    return (
        <SideBarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}


        >
            {
                Icon && <Icon
                    fontSize="small"
                    style={{
                        padding: 10
                    }} />
            }
            {
                Icon
                    ? (<h3>{title}</h3>)
                    : (
                        <SidebarOptionChannel>
                            <span>#</span>{title}
                        </SidebarOptionChannel>
                    )
            }
        </SideBarOptionContainer >
    )
}

export default SidebarOption

const SideBarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
        background-color: purple;
    }
    >h3{
        font-weight: 500;
    }
    >h3>span{
       padding :15px;
    }



`;

const SidebarOptionChannel = styled.div`
`;