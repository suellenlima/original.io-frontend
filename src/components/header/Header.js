import React from 'react';
import logo from './../../assets/images/logo-vector.png';
import './Header.css';

export default function Header(){
    return (
        <header class="header">
            <img class="logo" src={logo}/>
        </header>
    );
}