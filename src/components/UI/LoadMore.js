import styles from './LoadMore.module.css';

const LoadMore =({setRef})=>{
    return (
        <div className={styles['list-end']} ref={(elementRef) => { setRef(elementRef) }}></div>
    )
}
export default LoadMore;