import User from './User';
import Header from '../UI/Header';
import styles from './Users.module.css';

const Users = ({ users }) => {

    return (
        <>

            <div className={styles.container}>
                <Header title={'Our Users'} />
                {
                    users.map(user =>
                    (
                        <User user={user} key={user.id} />
                    ))
                }
            </div>
        </>
    )
}
export default Users;