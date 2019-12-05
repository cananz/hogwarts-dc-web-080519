import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

import PigTile from '../components/PigTile'

// import hogs from '../porkers_data';

class PigPen extends Component {

    render() {
      let {hogs} = this.props
      return (
        <div className="indexWrapper">
          <Card.Group stackable>
            {hogs.map(hog => <PigTile {...hog} />)}
          </Card.Group>
        </div>
    )
  }
}

export default PigPen
