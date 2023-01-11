import { Outlet } from "react-router";
import Usedetails from "./Usedetails";

const useAuth = () =>{
    const user = {loggedin:false}
    return user && user.loggedin
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Usedetails />
}

export default ProtectedRoutes;
