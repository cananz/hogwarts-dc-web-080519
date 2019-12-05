import React, { Component } from 'react';
import '../App.css';
import hogs from '../porkers_data';
//components
import Nav from './Nav'
import Filter from './Filter'
//containers
import PigPen from '../containers/PigPen'


class App extends Component {

  render() {
    return (
      <div className="App">
          < Nav />
          <Filter />
          <PigPen hogs={hogs} />
      </div>
    )
  }
}

export default App;
