import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import config from '~/config';

function ProtectedRoute({ element, ...rest }) {
    const { isAuthenticated, loading } = useSelector(authSelector);

    if (loading) return <div className="spinner-container">Loading</div>;
    return isAuthenticated ? <Outlet /> : <Navigate to={config.routes.login} />;
}

export default ProtectedRoute;
