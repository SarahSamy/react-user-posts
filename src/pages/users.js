import { useInfiniteQuery } from '@tanstack/react-query';
import Users from '../components/Users';
import { getUsers } from '../Api/usersApi';
import LoadMore from '../components/UI/LoadMore';
import Loading from '../components/UI/Loading';
import Error from '../components/UI/Error';
import fetchErrorImg from '../assets/images/error.png';
import useInView from '../hooks/useInView';
import { useEffect } from 'react';

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

    }, [inView, isFetchingNextPage])

    if (status === 'loading') {
        return (
            <Loading />
        )
    }

    if (error) {
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
        <>
            <Users users={data.pages.flat()} />
            <LoadMore setRef={setRef}/>
        </>


    )
}
export default UsersPage;