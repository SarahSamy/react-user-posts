import styles from './AccordionCard.module.css';
import plus from '../../assets/images/plus.png';
import minus from '../../assets/images/minus.svg';

const AccordionCard = (props) => {

    const toggleMe = () => {
        props.onTogglePost(props.id);
    }
    return (
        <div className={styles.card}>
            <div className={styles['card__title']} onClick={toggleMe} >
                <h3>{props.title}</h3>
                <div className={styles['card__icon']}>
                    {props.isOpen ?
                        <img src={minus} alt='minus' /> :
                        <img src={plus} alt='plus' />
                    }

                </div>
            </div>
            {props.isOpen && <div className={styles['card__content']}><p>{props.content}</p></div>}
        </div>
    )
}
export default AccordionCard;