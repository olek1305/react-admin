import React from 'react';
import './App.css';
import Dashboard from "./secure/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./secure/Users";
import Login from "./public/Login";
import Register from "./public/Register";
import Wrapper from "./secure/Wrapper";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* Public routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected routes (wrapped in Wrapper) */}
                    <Route path="/" element={<Wrapper><Dashboard /></Wrapper>} />
                    <Route path="/users" element={<Wrapper><Users /></Wrapper>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
