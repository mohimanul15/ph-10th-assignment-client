import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../../pages/Home/Home';
import Error404 from '../../pages/Error404/Error404';

const Routerlink = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])

export default Routerlink;