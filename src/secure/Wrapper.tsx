import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import axios from 'axios';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [redirect, setRedirect] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get('user');
            } catch (e) {
                setRedirect(true);
            }
        };

        const shouldCheckAuth = location.pathname !== '/login' && location.pathname !== '/register';

        if (shouldCheckAuth) {
            checkAuth();
        }
    }, [location]);

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Wrapper;