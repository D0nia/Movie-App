import React, { Component } from 'react';
import Search from './search-filter';
import Cardinfo from './cardinfo';
import RatingF from './rating-filter';
import './App.css';
import { Container } from 'react-bootstrap';

const cards =[ 
{   id:"1",
    title:"Spirited Away",
    releaseDate:"2001",
    rating:"5",
    img:require('../src/movie-imgs/spiritedAway.jpg')
},
{   id:"2",
    title:"Colorful",
    releaseDate:"2013",
    rating:"3",
    img:require('../src/movie-imgs/colorful.jpg')
},
{   id:"3",
    title:"The Beast and The Boy",
    releaseDate:"2015",
    rating:"5",
    img:require('../src/movie-imgs/beastAndBoy.jpg')
},
{   id:"4",
    title:"Kimi No Na Wa",
    releaseDate:"2016",
    rating:"4",
    img:require('../src/movie-imgs/kimiNoNawa.jpg')
}

]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      minRatingFilter: 3,
      titleFilter : '',
      x:cards
    }
}
addNewMovie(newMovie) {
  this.setState({
    x: this.state.x.push(newMovie)
  })
}

  render() { 
    return ( <div className="App">
        <Search   value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }}  />
         <RatingF/>
         <Container>
            <Cardinfo 
             x={cards.filter(el => 
              el.rating >= this.state.minRatingFilter &&
              el.title.toLowerCase().includes (this.state.titleFilter.toLocaleLowerCase())
               )}
               onAddMovie={(newMovie) => this.addNewMovie(newMovie)}
             />
          </Container>
         </div> );
  }
}
 
export default App ;


// function App() {
//   return (
//     <div className="App">
//     <Search/>
//     <RatingF/>
//     <Container>
//        <Cardinfo  x={cards}/>
//      </Container>
//     </div>
//   );
// }

// export default App;
