import { useParams } from 'react-router-dom';
import Posts from '../components/Posts'

const UserPostsPage = () => {
    let params = useParams()
    const { userId } = params;

    return (
        <Posts userId={userId} />
    )
}
export default UserPostsPage;