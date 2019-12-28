import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './Components/header/Header.js';

function App() {
  return (
    <div className="app">
    <Header/>

        <article id="mainArticle">Article
            <div id="inner-grid">
                <div className = "card">1
                    <div class="image"></div>​
                    <div className="text">
                        <h3>Seamlessly visualize quality</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <button>Here's why</button>
                    </div></div>
                <div>2

                    {/*<div className="image"></div>*/}
                    <div className="text">
                    <h3>Seamlessly visualize quality</h3>
                    <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                    <button>Here's why</button>
                </div>
                </div>
                <div>3     <div className="text">
                    <h3>Seamlessly visualize quality</h3>
                    <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                    <button>Here's why</button>
                </div> </div>
                <div>4
                    <div className="text">
                        <h3>Seamlessly visualize quality</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <button>Here's why</button>
                    </div> </div>
                <div>5
                    <div className="text">
                        <h3>Seamlessly visualize quality</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <button>Here's why</button>
                    </div>
                </div>
                <div>6</div>
                <div>7
                    <div className="text">
                        <h3>Seamlessly visualize quality</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <button>Here's why</button>
                    </div></div>
                <div>8</div>
                <div>5</div>
                <div>6
                    <div className="text">
                        <h3>Seamlessly visualize quality</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <button>Here's why</button>
                    </div></div>
                <div>7</div>
                <div>8</div>
            </div>
        </article>
        <nav id="mainNav">Nav</nav>

        <footer id="pageFooter">Footer
            <div id="footer-grid">

            </div> </footer>
    </div>
  );
}

export default App;
