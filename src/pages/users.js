import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getUsers } from '../api/usersApi';
import useInView from '../hooks/useInView';
import Users from '../components/features/Users';
import LoadMore from '../components/UI/LoadMore';
import Loading from '../components/UI/Loading';
import FetchingError from '../components/UI/FetchingError';

const UsersPage = () => {
    const pageLimit = 6;
    const [inView, setRef] = useInView();
    const {
        status,
        data,
        error,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,

    } = useInfiniteQuery(
        ['users'],
        async ({ pageParam = 1 }) => getUsers(pageParam, pageLimit),
        {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.length < pageLimit) {
                    return undefined;
                }
                return allPages.length + 1
            }
        },
    )


    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }

    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    if (status === 'loading') {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <FetchingError />
        )
    }
    return (
        <>
            <Users users={data.pages.flat()} />
            <LoadMore setRef={setRef} />
        </>


    )
}
export default UsersPage;