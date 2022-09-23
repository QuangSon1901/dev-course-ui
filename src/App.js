import { Fragment, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { publicRoutes } from './routes';

import './sass/index.scss';

function App() {
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
            </Routes>
        </Router>
    );
}

export default App;
