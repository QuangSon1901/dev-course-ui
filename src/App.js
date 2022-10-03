import { useEffect } from 'react';
import { Fragment, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Routing';
import { getUser } from './layouts/AuthLayout/authSlice';
import MainLayout from './layouts/MainLayout';
import { privateRouters, publicRoutes } from './routes';

import './sass/index.scss';

function App() {
    const dispatch = useDispatch();

    dispatch(getUser());

    useEffect(() => {
        document.body.ontouchend = function () {
            document.querySelector('[name="name"]').focus();
        };
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
                                    <Suspense fallback={null}>
                                        <Page />
                                    </Suspense>
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
                                        <Suspense fallback={null}>
                                            <Page />
                                        </Suspense>
                                    </Layout>
                                }
                            />
                        </Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
