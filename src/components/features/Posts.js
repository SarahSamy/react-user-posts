import { useState } from 'react';
import Post from './Post';
import Header from '../UI/Header';
import styles from './Posts.module.css';


const Posts = ({ posts, user }) => {

    const [activePostId, setActivePostId] = useState();
    const togglePostHandler = (id) => {
        setActivePostId(activePostId === id ? null : id)
    }

    return (
        <div className={styles['container']}>
            <Header title={`${user.name} posts`} />
            <div className={styles.body}>
                {posts.map(post => (
                    <Post key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.body}
                        isOpen={post.id === activePostId}
                        onTogglePost={togglePostHandler}

                    />
                ))}
            </div>

        </div>
    )


}
export default Posts;