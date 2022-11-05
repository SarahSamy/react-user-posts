import User from './User';
import Header from './UI/Header';
import styles from './Users.module.css';

const Users = (props) => {

    return (
        <div className={styles['cards-container']}>
            <Header title={'Our Users'}/>
            {
                props.users.map(user =>
                (
                    <User user={user} key={user.id} />
                ))
            }

        </div>
    )
}
export default Users;