import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from "../store/slices/userSlice";

const GuestRoute = ({ children }) => {
  const isAuthenticated = useSelector(getUserInfo); // Get the user authentication status from the store

  if (isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to dashboard if user is authenticated
  }

  return children || <Outlet />; // Render the login component or nested routes
};

export default GuestRoute;