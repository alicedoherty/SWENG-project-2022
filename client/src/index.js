import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Create from "./Create"
import Post from "./Post"

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path= "/" element={<Header/>} />
            <Route exact path= "/create" element={<Create />}/>
            <Route exact path= "/test" element={<App />}/>
            <Route exact path= "/post-page" element={<Post />}/>
        </Routes>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
