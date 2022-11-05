import styles from './Posts.module.css';
import { getPosts } from '../Api/postsApi';
import { useQuery,useInfiniteQuery } from '@tanstack/react-query';
import Loading from './UI/Loading';
import Post from './Post';
import Error from '../components/UI/Error';
import fetchErrorImg from '../assets/images/error.png';
import { getUserById } from '../Api/usersApi';
import Header from './UI/Header';
import useInView from '../hooks/useInView';
import { useState ,useEffect} from 'react';
import LoadMore from './UI/LoadMore';


const Posts = ({ userId }) => {

    const [activePostId, setActivePostId] = useState();
    const pageLimit = 8;
    const [inView, setRef] = useInView();
    const {
        status:postsFetchStatus,
        data:posts,
        error:postsFetchError,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,

    } = useInfiniteQuery(
        ['posts',userId],
        async ({ pageParam = 1 }) => getPosts(userId,pageParam, pageLimit),
        {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.length < pageLimit) {
                    return undefined;
                }
                return allPages.length + 1
            }
        },
    )

    const { data: user, status: userFetchStatus, error: userFetchError } = useQuery(['user', userId], () => getUserById(userId));

    const togglePostHandler = (id) => {
        setActivePostId(activePostId === id ? null : id)
    }

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }

    }, [inView, isFetchingNextPage])
    if (postsFetchStatus === 'loading' || userFetchStatus === 'loading') {
        return (
            <Loading />
        )
    }

    if (postsFetchError || userFetchError) {
        return (
            <Error
                img={fetchErrorImg}
                msg={"Something went wrong"}
                action={{
                    func: () => { window.location.reload() },
                    message: "Try again"
                }
                }
            />
        )
    }
    return (
        <div className={styles['cards__container']}>
            <Header title={`${user.name} posts`} />
            {posts.pages.flat().map(post => (
                <Post key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.body}
                    isOpen={post.id === activePostId}
                    onTogglePost={togglePostHandler}
                />
            ))}
            <LoadMore setRef={setRef}/>
        </div>
    )


}
export default Posts;