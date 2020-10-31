import React from 'react';
import './Bag.css';
import bagIcon from './../../assets/images/bag.png'

export default function Bag(){
    return (
        <div class="bag">
            <img src={bagIcon}/>
        </div>
    );
}