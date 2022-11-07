import Error from "./Error";
import Header from "./Header";
import fetchErrorImg from '../../assets/images/error.png';

const FetchingError = () => {
    return (
        <>
            <Header title={'Error'} />
            <Error
                img={fetchErrorImg}
                msg={"Something went wrong"}
                action={{
                    func: () => { window.location.reload() },
                    message: "Try again"
                }
                }
            />
        </>
    )
}
export default FetchingError;