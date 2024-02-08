import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profileContainer}>
            <div className={css.imageContainer}>
                <img src={image} alt="User avatar" className={css.profileAvatar} />
                <p className={css.profileUsername}>{ name }</p>
                <p className={css.profileText}>@{ tag }</p>
                <p className={css.profileText}>{ location }</p>
            </div>
            <ul className={css.profileStats}>
                <li className={css.profileStatsItem}>
                    <span>Followers</span>
                    <span className={css.boldText}>{ stats.followers }</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span>Views</span>
                    <span className={css.boldText}>{ stats.views }</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span>Likes</span>
                    <span className={css.boldText}>{ stats.likes }</span>
                </li>
            </ul>
        </div>
    )
}