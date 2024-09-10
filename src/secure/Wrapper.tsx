import React, { Component, ReactNode } from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import {Navigate} from "react-router-dom";
import axiosInstance from "../axiosInstance";

type WrapperProps = {
    children: ReactNode;
};

class Wrapper extends Component<WrapperProps> {
    state = {
        redirect: false
    };

    componentDidMount = async () => {
        // Get token from localStorage
        const token = localStorage.getItem('token');

        if (token) {
            // Set Authorization header if token is available
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            try {
                const response = await axiosInstance.get('user');
            } catch (e) {
                console.error("Error fetching user data:", e);
            }
        } else {
            // Directly set redirect state if no token
            this.setState({ redirect: true });
        }
    };

    render() {
        if (this.state.redirect) {
            return <Navigate to="/login" />;
        }

        return (
            <>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default Wrapper;