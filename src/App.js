import { Fragment, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Routing';
import { getUser } from './layouts/AuthLayout/authSlice';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import { combineApi } from './redux/reducerCombine';
import { privateRouters, publicRoutes } from './routes';

import './sass/index.scss';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import notiflixInit from './utils/notiflixInit';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
        dispatch(combineApi());
        notiflixInit();
    }, []);

    return (
        <Router>
            <Routes>
                {publicRoutes.map((item, index) => {
                    const Page = item.component;

                    let Layout = MainLayout;

                    if (item.layout) Layout = item.layout;
                    else if (item.layout === null) Layout = Fragment;

                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    {/* <Suspense fallback={null}> */}
                                    <Page />
                                    {/* </Suspense> */}
                                </Layout>
                            }
                        />
                    );
                })}
                {privateRouters.map((item, index) => {
                    const Page = item.component;

                    let Layout = MainLayout;

                    if (item.layout) Layout = item.layout;
                    else if (item.layout === null) Layout = Fragment;
                    return (
                        <Route key={index} path={item.path} element={<ProtectedRoute />}>
                            <Route
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        </Route>
                    );
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
