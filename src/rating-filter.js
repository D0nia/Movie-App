import React, { Component } from 'react';
import './App.css'
import StarRatingComponent from 'react-star-rating-component';


class RatingF extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="mini-rating">
           <span className="rating-text"> Minimum rating  </span>
           <StarRatingComponent value={3}  starColor={'	rgb(245,245,245)'}/>
        </div>
       );
    }
}
 
export default RatingF;