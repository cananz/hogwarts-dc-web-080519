import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const PigTile = props => {
  let {name, specialty, greased, weight, image } = props
  return (
    <Card>

      {image ? <Image src={image} fluid /> : null}

      {/* <Image src={image} fluid /> */}
      <Card.Content>

        <Card.Header>{name}</Card.Header>
      </Card.Content>

    </Card>
  )
}

export default PigTile
