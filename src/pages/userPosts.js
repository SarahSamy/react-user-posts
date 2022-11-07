import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '../api/postsApi';
import useInView from '../hooks/useInView';
import Posts from '../components/features/Posts';
import Loading from '../components/UI/Loading';
import FetchingError from '../components/UI/FetchingError';
import { getUserById } from '../api/usersApi';
import LoadMore from '../components/UI/LoadMore';

const UserPostsPage = () => {
    let params = useParams()
    const { userId } = params;
    const pageLimit = 8;
    const [inView, setRef] = useInView();
    const {
        status: postsFetchStatus,
        data: posts,
        error: postsFetchError,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,

    } = useInfiniteQuery(
        ['posts', userId],
        async ({ pageParam = 1 }) => getPosts(userId, pageParam, pageLimit),
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



    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }

    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])
    if (postsFetchStatus === 'loading' || userFetchStatus === 'loading') {
        return (
            <Loading />
        )
    }

    if (postsFetchError || userFetchError) {
        return (
            <FetchingError />
        )
    }
    return (
        <>
            <Posts user={user} posts={posts.pages.flat()} />
            <LoadMore setRef={setRef} />
        </>
    )
}
export default UserPostsPage;