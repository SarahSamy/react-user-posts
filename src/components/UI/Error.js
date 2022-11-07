import styles from './Error.module.css'

const Error = ({ img, msg, action }) => {
    return (

        <div className={styles.card}>
            <img src={img} alt='error' />
            <p className={styles['card__msg']}>{msg}</p>
            <button className={styles['card__action']} onClick={action.func}>{action.message}</button>
        </div>

    )
}
export default Error;