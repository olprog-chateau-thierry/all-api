import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from "./Header.jsx";
import RandomApp from "./random-user/RandomApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <div className="main">
            <RandomApp/>
        </div>
    </React.StrictMode>,
)
