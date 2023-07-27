import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../services/users.services";


const ProtectedRoute = ({ redirectPath }) => {
    if (!localStorage.getItem('user_token')) {
        alert('Protected route. You must be logged in.')
        return <Navigate to={redirectPath} />
    };


    return <Outlet />;
};

const ProtectedAdminRoute = ({ redirectPath }) => {

    /* isadmin */
    if (!isAdmin()) {
        alert('Protected route. You must be admin.')
        return <Navigate to={redirectPath} />
    }


    return <Outlet />;
};

export { ProtectedRoute, ProtectedAdminRoute };
