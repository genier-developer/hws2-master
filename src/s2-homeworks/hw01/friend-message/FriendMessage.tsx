import React from 'react'
import s from './FriendMessage.module.css'
import {friendMessage0, MessageType} from "../HW1";

export type MessagePropsType = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={friendMessage0.user.avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                    alt={'User avatar'}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}

                        {friendMessage0.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {friendMessage0.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {friendMessage0.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
