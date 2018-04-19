import React, { Component } from 'react';
import './App.css';
import Svg from './components/webLogo';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App"> {/*main div */}
      		<div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
              <div className="col-3 d-flex flex-column align-items-center justify-content-center h100" id="left">
                  <div className="p-2">
                    <h1> Kevin Chung </h1>
                  </div>
                  <div className="p-2">
                    <h4><a href="#"> about </a></h4>
                  </div>
                  <div className="p-2">
                    <h4><a href="https://github.com/kca99" id="link"> github </a></h4>
                  </div>
                  <div className="p-2">
                    <h4><a href="http://www.bitsofdna.wordpress.com"  id="link"> blog</a> </h4>
                  </div>
                  <div className="p-2">
                    <h4><a href="https://drive.google.com/open?id=1bghNpCdASjeVWuSHeYE9xzSGSyJsL9VM"   id="link"> resume </a> </h4>
                  </div>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-center h100" id="right">
                <div id="svgdiv">
                  <Svg />
                </div>
                <div id="about">
                  <h1> Test Test </h1>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
