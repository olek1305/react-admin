import React from 'react';
import './App.css';
import Dashboard from "./secure/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./secure/users/Users";
import Login from "./public/Login";
import Register from "./public/Register";
import Wrapper from "./secure/Wrapper";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
