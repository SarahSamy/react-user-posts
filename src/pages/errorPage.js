import Error from '../components/UI/Error';
import Header from '../components/UI/Header';
import errorImg from '../assets/images/error-404.png';
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header title={'Error'}/>
            <Error
                img={errorImg}
                msg={"Page not found"}
                action={{
                    func :() => {
                       navigate("/");} ,
                    message: "Go Home"}
                }
            />
        </>
    
    )
}
export default ErrorPage;