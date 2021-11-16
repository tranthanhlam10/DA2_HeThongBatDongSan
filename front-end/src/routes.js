import React from 'react';
import Login from './sign/Login/Login'
import Register from './sign/Register/Register'
import UserScreen from './user/UserScreen'
import AdminScreen from './admin/AdminScreen'
const routes = [
    {
        path: "/login",
        exact: false,
        main: () => <Login />,
    },
    {
        path: "/register",
        exact: false,
        main: () => <Register />,
    },
    {
        path: "/admin",
        exact: false,
        main: () => <AdminScreen />,
    },
    {
        path: "",
        exact: true,
        main: () => <UserScreen />,
    },
]

export default routes;