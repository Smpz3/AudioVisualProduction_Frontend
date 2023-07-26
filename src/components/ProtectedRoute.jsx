import { Navigate, Outlet, useParams } from "react-router-dom";


const ProtectedRoute = ({ redirectPath }) => {
    /* isadmin */
    const { userID } = useParams();
    console.log(userID);

    if (!localStorage.getItem('user_token')) {
        alert('Protected route. You must be logged in.')
        return <Navigate to={redirectPath} />
    };

    return <Outlet />;
};

export default ProtectedRoute;
