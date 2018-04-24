import React, { Component } from 'react';
import {Footer, Navigation, Body} from "./Components/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
