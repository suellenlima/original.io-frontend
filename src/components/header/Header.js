import React from 'react';
import logo from './../../assets/images/logo-vector.png';
import './Header.css';
import Search from './../search/Search';
import Bag from './../bag/Bag';
import menuIcon from './../../assets/images/menu.png';

export default function Header(){
    return (
        <>
            <header class="header">
                <div class="left">
                    <img src={menuIcon} />
                </div>
                <img class="logo" src={logo}/>
                <div class="right">
                    <Search class="search"/>
                    <Bag class="bag"/>
                </div>
            </header>
        </>
    );
}