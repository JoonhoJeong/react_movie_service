import React from 'react';
import { Col, Image } from 'antd';
import {Link} from 'react-router-dom';

function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
          <Link to={`/movie/${props.movieId}`}>
            <img style={{ width: '100%', height: '320px'}}
              src={props.image} alt={props.movieName}/>
          </Link>
        </div>
      </Col>
    )
  } else {
    console.log("JJH:" + props.image + (props.image ===null));
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
          {/* <img style={{ width: '100%', height: '320px'}}
            src={props.image} alt={props.characterName}/> */}
            <Image src={props.image === null ? "error" : props.image}
              width = {250}
              alt={props.characterName} />
        </div>
      </Col>
    )
  }
  
}

export default GridCards
