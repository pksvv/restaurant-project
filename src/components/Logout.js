import React from 'react';
import { Redirect } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";


const Logout = () => {
    localStorage.clear();
    console.warn('localstorage-login?  ',localStorage.getItem('login'));
    return <Redirect to="/login" />
};

export default Logout;