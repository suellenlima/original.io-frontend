import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Panel from './components/panel/Panel'

function App() {
    return (
        <>
            <Header/>
            <div class="panel">
                <Panel/>
            </div>
        </>
    );
}

export default App;