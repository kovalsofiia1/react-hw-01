import './FriendListItem.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    const cardClass = isOnline ? "onlineCard" : "offlineCard";
    return (
        <div className="friendListItem">
            <img src={ avatar } alt="Avatar" width="48" />
            <p className='friendCardText'>{ name }</p>
            <p className={"onlineStatusText "+ cardClass }>{ isOnline ? 'Online':'Offline' }</p>
        </div>
    )
}