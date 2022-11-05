import styles from './Loading.module.css';

const Loading = () => {
    return (
            <div className={styles['spinner-container']}>
                <div className={styles['loading-spinner']}></div>
                <h3 className={styles['loading-spinner__text']}>Loading . . .</h3>
            </div>
    )
}
export default Loading;