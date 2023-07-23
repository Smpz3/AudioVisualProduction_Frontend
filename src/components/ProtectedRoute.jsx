import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ redirectPath }) => {

    if (!localStorage.getItem('gym_token')) {
        alert('Protected route. You must be logged in.')
        return <Navigate to={redirectPath} />
    };

    return <Outlet />;
};

export default ProtectedRoute;
