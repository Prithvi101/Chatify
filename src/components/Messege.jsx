import React from 'react'
import styled from 'styled-components'

function Messege({ messege, timestamp, user, userImage }) {
    return (
        <MessegeConatiner>
            <img src={userImage} alt="profileImage" />
            <MessegeInfo>

                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>


                <p>{messege}</p>
            </MessegeInfo>
        </MessegeConatiner>
    )
}

export default Messege

const MessegeConatiner = styled.div`
display: flex;
align-items: center;
padding: 20px;
>img{
    width: 35px;
    border-radius: 8px;
}
`
const MessegeHeader = styled.div``


const MessegeInfo = styled.div`
padding-left: 10px;
>h4>span{
    color: grey;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;

}


`