import React, { Component } from 'react';
import MovieCard from './movie-card'
import {Card} from 'react-bootstrap';

// class Cardinfo extends Component {
    
//     render() { 
//         const{x}=this.props
//         return ( 
//         <div>
//          <div className="infocard">
//            {  x.map((el)=> <MovieCard  key={el.id} cards={el}/>)}
//              <Card style={{ width: '19rem' }} > <img  className="plusbutton" src="https://www.iconsdb.com/icons/preview/black/plus-5-xxl.png" width="250px"/>  </Card>
//          </div>
//         </div>
//          );
//     }
// }
 
// export default Cardinfo;
const Cardinfo = ({x = [], onAddMovie = () => {}}) => {
  return ( <div className="infocard">
          {  x.map((el)=> <MovieCard  key={el.id} cards={el}/>)} 
          <Card  style={{ width: '19rem' }}
            className="new-movie-card"
            onClick={() => {
                onAddMovie({
                    id: Math.random(),
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: ')),
                    releaseDate: Number(prompt('movie year: ')),
                    img : prompt('movie img: ')
                })
            }} >
           <img  className="plusbutton" src="https://www.iconsdb.com/icons/preview/black/plus-5-xxl.png" width="250px"/>
        </Card>
        </div>
        
  );
}

 
export default Cardinfo;