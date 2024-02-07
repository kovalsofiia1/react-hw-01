import './Profile.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className="profileContainer">
            <div className='imageContainer'>
                <img src={ image } alt="User avatar" className='profileAvatar'/>
                <p className='profileUsername'>{ name }</p>
                <p className='profileText'>@{ tag }</p>
                <p className='profileText'>{ location }</p>
            </div>
            <ul className='profileStats'>
                <li className='profileStatsItem'>
                    <span>Followers</span>
                    <span className='boldText'>{ stats.followers }</span>
                </li>
                <li className='profileStatsItem'>
                    <span>Views</span>
                    <span className='boldText'>{ stats.views }</span>
                </li>
                <li className='profileStatsItem'>
                    <span>Likes</span>
                    <span className='boldText'>{ stats.likes }</span>
                </li>
            </ul>
        </div>
    )
}