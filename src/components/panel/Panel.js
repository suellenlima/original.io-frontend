import React from 'react';
import './Panel.css';
import Menu from './../menu/Menu';
import Search from './../search/Search'


export default function Panel(){
    return (
        <div class="bar">
            <div>
                <a>
                    <span> Entrar </span>
                </a>
                <span>|</span>
                <a>
                    <span> Cadastrar-se </span>
                </a>
            </div>
            <Menu/>
            <Search/>
        </div>
    );
}