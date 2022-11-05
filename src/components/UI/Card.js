import email from '../../assets/images/envelope.svg';
import username from '../../assets/images/user.svg';
import website from '../../assets/images/globe.svg'
import phone from '../../assets/images/phone-call.svg'
import home from '../../assets/images/home.svg'
import company from '../../assets/images/building.svg';
import { Link } from "react-router-dom";
import styles from './Card.module.css';

const Card = ({ user }) => {
    return (
        <div className={styles.card}>
            <div className={styles['card__header']}>
                <h2 >{user.name}</h2>
            </div>
            <div className={styles['card__list']}>
                <div className={styles['card__list__item']}>
                    <div className={styles['card__icons']}>
                        <img src={username} alt='username' />
                        <span className={styles['card__icons-tooltiptext']} >Username</span>
                    </div>
                    <div className={styles['card__text']}><p>{user.username}</p></div>
                </div>
                <div className={styles['card__list__item']}>
                    <div className={styles['card__icons']}>
                        <img src={phone} alt='phone' />
                        <span className={styles['card__icons-tooltiptext']} >Phone</span>
                    </div>
                    <div className={styles['card__text']}><a href={`tel:user.phone`}><p>{user.phone}</p></a></div>
                </div>
                <div className={styles['card__list__item']}>
                    <div className={styles['card__icons']}>
                        <img src={email} alt='email' />
                        <span className={styles['card__icons-tooltiptext']} >Email</span>
                    </div>
                    <div className={styles['card__text']}>
                        <a href={`mailto:${user.email}`}>
                            <p>{user.email}</p>
                        </a>
                    </div>
                </div>
                <div className={styles['card__list__item']}>
                    <div className={styles['card__icons']}>
                        <img src={home} alt='address' />
                        <span className={styles['card__icons-tooltiptext']} >Address</span>
                    </div>
                    <div className={styles['card__text']}><p>{user.address && `${user.address.city} - ${user.address.street}`}</p></div>
                </div>
                <div className={styles['card__list__item']}>
                    <div className={styles['card__icons']}>
                        <img src={company} alt='company' />
                        <span className={styles['card__icons-tooltiptext']} >Company</span>
                    </div>
                    <div className={styles['card__text']}> <p>{user.company?.name}</p></div>
                </div>
                <div className={styles['card__list__item']}>
                    <div className={styles['card__icons']}>
                        <img src={website} alt='website' />
                        <span className={styles['card__icons-tooltiptext']} >Website</span>
                    </div>
                    <div className={styles['card__text']}>
                        <a href={`//${user.website}`} target='_blank'>{user.website}</a>
                    </div>
                </div>
            </div>
            <Link to={`/posts/${user.id}`} className={styles['card__action']}>
                <p>See posts</p>
            </Link>
        </div>
    )
}
export default Card;