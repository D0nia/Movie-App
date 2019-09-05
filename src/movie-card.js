import React, { Component } from 'react';
import {Card, Row} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

import './App.css'



class MovieCard extends Component {
    render() { 
      const {cards}=this.props
        return ( 
        <div>
          <Row>
           
          <Card className="card" style={{ width: '19rem' }}>
              <div className="movie-rating"><StarRatingComponent value={cards.rating}  starColor={'	rgb(245,245,245)'}/></div>
            {/* <div className="movie-img"> */}
                <img  src={cards.img} alt="poster" width="300rem" height="300px"/>
            {/* </div> */}
            <div className="movie-title"> {cards.title} - {cards.releaseDate} </div>
             
          </Card>
        </Row>
        </div> );
    }
}
 
export default MovieCard;