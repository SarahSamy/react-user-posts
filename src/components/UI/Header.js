import styles from './Header.module.css';

const Header = ({ title }) => {
    return (
        <div className={styles.container}>
            <h2> {title}</h2>
        </div>
    )
}
export default Header;