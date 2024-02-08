import css from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    const cardClass = isOnline ? "onlineCard" : "offlineCard";
    return (
        <div className={css.friendListItem}>
            <img src={ avatar } alt="Avatar" width="48" />
            <p className={css.friendCardText}>{ name }</p>
            <p className={ css[cardClass] }>{ isOnline ? 'Online':'Offline' }</p>
        </div>
    )
}