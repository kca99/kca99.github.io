import React, { Component } from 'react';
import './App.css';
import Svg from './components/webLogo';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App"> {/*main div */}
        <div className="container-fluid">
          <Svg />
        </div>
        <div className="container">
      		<div className="row" id="Description">
      			<div className="col-sm-8">
      				<h1>Lorem Ipsum </h1>
      			</div>
            <div className="row" id="Items">
        			<div className="col-sm-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla suscipit turpis sed placerat. In vestibulum auctor dictum. Aenean vel est at tellus molestie faucibus. Mauris consectetur sagittis est nec efficitur. Nulla facilisi. Pellentesque a malesuada neque, sed maximus tortor. Mauris condimentum dictum arcu, eu rhoncus nunc finibus et. Donec interdum eget libero ut finibus. Suspendisse at iaculis nisi. Sed consequat dui eu ante gravida, eu placerat elit varius. Donec porta placerat risus, non vulputate diam auctor ut. Morbi egestas ex sit amet nunc fermentum, non volutpat eros sollicitudin. Suspendisse vitae eleifend sapien.</p>
        			</div>
        			<div className="col-sm-4">
        			   <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" className="img-responsive" alt="description"></img>
        			</div>
            </div>
      			<div className="col-sm-12">
      				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie tellus sed pretium vulputate. Praesent sit amet gravida lectus. In quis justo arcu. Nam molestie auctor orci ut mollis. Praesent laoreet consequat tellus non porta. Integer eget sollicitudin sapien, vitae vestibulum arcu. Ut ac aliquam eros, in posuere risus. Donec aliquam vestibulum iaculis. Vivamus gravida scelerisque nisl cursus pharetra. In tempor tortor nec arcu commodo, a ultrices est imperdiet. Vivamus et elit eu erat efficitur congue. Nunc sed iaculis mi, vel vulputate ligula. Donec efficitur lectus id urna volutpat interdum. Quisque facilisis tellus ut ipsum finibus, egestas scelerisque libero aliquet. Duis sed nibh et sapien tincidunt lacinia.
              Maecenas ultricies sapien ut fermentum tempor. Nullam vel nisi commodo, venenatis ligula eget, tincidunt neque. Etiam ac odio quis orci maximus dapibus. Mauris consectetur orci turpis, id pulvinar ex malesuada non. Nulla eu congue dui. Mauris sit amet erat in ex molestie molestie et a quam. Nullam lobortis arcu vitae mauris egestas, nec sodales nibh laoreet. Praesent non sapien convallis, vehicula massa vitae, eleifend nisi. Suspendisse vitae ex eros. Aenean vel erat nec metus iaculis ornare. Quisque porttitor nunc ligula, sed volutpat quam feugiat sed. Etiam et vulputate risus, at mollis orci. Quisque eu nibh elementum, ullamcorper nulla blandit, cursus felis. Nullam elementum eget est in volutpat. Duis bibendum, justo ut porta varius, turpis magna molestie felis, ut sollicitudin purus nulla non arcu. Quisque gravida eu nunc non blandit. </p>
      			</div>
      		</div>


    		</div>
      </div>
    );
  }
}

export default App;
