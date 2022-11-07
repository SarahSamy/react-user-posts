import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = ({ title }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles['logo__img']} src={logo} alt="logo" />
                <Link to={`/`}>
                    <p className={styles['logo__name']}>Business Blog</p>
                </Link>

            </div>

            <div className={styles['header__title']}>
                <h3> {title}</h3>
            </div>
        </div>
    )
}
export default Header;