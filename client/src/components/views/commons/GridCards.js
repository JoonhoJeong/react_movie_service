import React from 'react';
import { Col, Image } from 'antd';
import {Link} from 'react-router-dom';

import { Card } from 'antd';


function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
          <Link to={`/movie/${props.movieId}`}>
            <Card
              hoverable
              style={{ width: '80%', height: '80%'}}
              cover={<img alt={props.movieName} src={props.image} />}
            >
              <Card.Meta title={props.movieName}/>
            </Card>
          </Link>
        </div>
      </Col>
    )
  } else {
    console.log("JJH:" + props.image + (props.image ===null));
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
            <Card
              hoverable
              style={{ width: '250px', height: '80%'}}
              cover={<Image src={props.image === null ? "error" : props.image}
                    width = {250}
                    alt={props.characterName} />
                    }
            >
              <Card.Meta title={props.characterName}/>
            </Card>

            {/* <Image src={props.image === null ? "error" : props.image}
              width = {250}
              alt={props.characterName} /> */}
        </div>
      </Col>
    )
  }
  
}

export default GridCards
