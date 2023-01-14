import './App.css';
import React from 'react';
import Sidebar from "./Components/Sidebar-session/Sidebar";
import Body from "./Components/Body-session/Body";
import Account from "./Components/Account-session/Account";

function App() {
    return (
        <div className="container">
            <Sidebar/>
            <Body/>
            <Account/>
        </div>
    );
}

export default App;
