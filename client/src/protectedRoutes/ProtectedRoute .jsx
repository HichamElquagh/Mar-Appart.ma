
import { Navigate, Outlet } from 'react-router-dom';
import {getUserInfo} from "../store/slices/userSlice";
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ children }) => {

    const isAuthenticated = useSelector(getUserInfo); // Get the user authentication status from the store
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // Redirect to login on unauthenticated access
    }

    return children || <Outlet />; // Render the protected component or nested routes
};

export default ProtectedRoute;