import React from 'react';
import './Panel.css';
import Menu from './../menu/Menu';
import Search from './../search/Search';
import Bag from './../bag/Bag';

export default function Panel(){
    return (
        <div class="bar">
            <div class="sign">
                <a class="signIn"> Entrar </a>
                <span>|</span>
                <a class="signOut"> Cadastrar-se </a>
            </div>
            <Menu/>
            <Search/>
            <Bag/>
        </div>
    );
}