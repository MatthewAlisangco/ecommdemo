import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/header/Header.js';
import Jumbo from './components/jumbotron/Jumbotron.js'
import Navigator from './components/navigator/Navigator';
import DisplayItems from "./components/display-grid/DisplayItems";
import ItemsModal from "./components/display-grid/ItemsModal";

function App() {
  return (
    <div className="app">
    <Header/>
       <Jumbo/>
    <Navigator/>
        <article id="mainArticle">Article
            {/*<div id="inner-grid">*/}
                <DisplayItems/>

            {/*</div>*/}
        </article>

        <footer id="pageFooter" style={{color:"white"}}>Footer © Matthew Alisangco
            <div id="footer-grid">

            </div> </footer>
    </div>
  );
}

export default App;
