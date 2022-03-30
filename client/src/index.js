import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Home from "./Home"
// import Create from "./Create"
// import Post from "./Post";
// import Search from "./Search";

ReactDOM.render(
    <App />
    // <Router>
    //     <Routes>
    //         <Route exact path= "/" element={<Home/>} />
    //         <Route exact path= "/create" element={<Create />}/>
    //         <Route exact path= "/posts/:id" element={<Post />}/>
    //         <Route exact path= "/search" element={<Search />}/>
    //         <Route exact path= "/test" element={<App />}/>
    //     </Routes>
    // </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


