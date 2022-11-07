import styles from './AccordionCard.module.css';
import plus from '../../assets/images/plus.png';
import minus from '../../assets/images/minus.svg';

const AccordionCard = ({ id, onTogglePost, title, content, isOpen }) => {

    const toggleMe = () => {
        onTogglePost(id);
    }
    return (
        <div className={styles.card}>
            <div className={styles['card__title']} onClick={toggleMe} >
                <h3>{title}</h3>
                <div className={styles['card__icon']}>
                    {isOpen ?
                        <img src={minus} alt='minus' /> :
                        <img src={plus} alt='plus' />
                    }

                </div>
            </div>
            {isOpen && <div className={styles['card__content']}><p>{content}</p></div>}
        </div>
    )
}
export default AccordionCard;