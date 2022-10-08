import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import config from '~/config';
import { Loading } from 'notiflix';

function ProtectedRoute({ element, ...rest }) {
    const { isAuthenticated, loading } = useSelector(authSelector);

    if (loading) return Loading.circle({ zindex: 99999, svgColor: '#2835d5' });

    Loading.remove(500);
    return isAuthenticated ? <Outlet /> : <Navigate to={config.routes.login} />;
}

export default ProtectedRoute;
