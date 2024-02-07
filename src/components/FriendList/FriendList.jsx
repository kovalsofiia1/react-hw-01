import FriendListItem from "../FriendListItem/FriendListItem"
import './FriendList.css'

export default function FriendList({ friends }) {
    return (
        <ul className="friendList">
            {friends.map((friend) => {
                return <li key={friend.id}>
                    {<FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />}
                </li>
            })}
        </ul>
    )
}