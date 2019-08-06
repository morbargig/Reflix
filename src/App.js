import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Catalog from './component/Catalog';
import Landing from './component/Landing';
import MovieDetail from './component/MovieDetail ';



/*
git add .
git commit -m "mor"
git push
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 0,
          name: "mor",
          color: "red",
          isRented: [0, 1, 2],
          Budget: 10,
        },
        {
          id: 1,
          name: "bar",
          color: "green",
          isRented: [1],
          Budget: 200,
        },
        {
          id: 2,
          name: "roni",
          color: 'blue',
          isRented: [0, 2],
          Budget: 100,
        },
        {
          id: 3,
          name: "maya",
          color: 'yellow',
          isRented: [0],
          Budget: 100,
        }
      ],
      movies: [
        { price: 20, id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { price: 35, id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { price: 15, id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { price: 20, id: 3, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
        // { id: 4, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
      ],
      Budget: 50,
      isRented: []
    }
  }

  pushNewUser = (newUser) => {
    // console.log(newUser)
    this.setState({
      Budget: newUser.Budget
    }, function () {
      let newUsers = [...this.state.users]
      let movies = [...this.state.movies]

      movies.map(c => c.isRented = false)
      // movies.map(c => c.isRented = false)
      // console.log(newUser.isRented)
      newUser.isRented.map(c =>
        movies[c] ? movies[c].isRented = true : console.log("gdfg")
      )
      this.setState({
        movies: movies
      }, function () {
        // console.log(this.state.movies)
      })
      this.setState({
        users: newUsers
      }
        // , function () { console.log(this.state.users, this.state.movies) }
      )
    }
    )
  }

  isRented = (e) => {
    // console.log(e)
    let movies = [...this.state.movies]
    let Budget = this.state.Budget
    if (movies[e].isRented === false) {
      if (this.state.Budget >= this.state.movies.find(m => m.id === e).price) {
        movies[e].isRented = true;
        Budget -= this.state.movies.find(m => m.id === e).price
        this.setState({
          movies: movies,
          Budget: Budget
        }, function () {
          //i nedd to do something with that that when i in the ragoler catlog it dont work
          // console.log(localStorage.getItem('now'))
          if (localStorage.getItem('now') !== "catlog") {
            let newArryIsRented = []
            let RentedMovies = movies.filter(c => c.isRented === true)
            RentedMovies.map(x => {
              newArryIsRented.push(x.id)
            })
            // console.log(newArryIsRented)
            let userNow = localStorage.getItem('now')
            let b = JSON.parse(localStorage.getItem(userNow))
            b.isRented = newArryIsRented
            b.Budget = Budget
            window.localStorage.setItem(userNow, JSON.stringify(b))
          }
        }
        )
      } else { alert(`you can't aport to buy ${movies[e].title} becuse you have only ${this.state.Budget}$ and it Cost ${movies[e].price}$`) }
    } else {
      movies[e].isRented = false;
      Budget += this.state.movies.find(m => m.id === e).price
      this.setState({
        movies: movies,
        Budget: Budget
      }, function () {
        if (localStorage.getItem('now') !== "catlog") {
          let newArryIsRented = []
          let RentedMovies = movies.filter(c => c.isRented === true)
          RentedMovies.map(x => {
            newArryIsRented.push(x.id)
          })
          // console.log(newArryIsRented)
          let userNow = localStorage.getItem('now')
          let b = JSON.parse(localStorage.getItem(userNow))
          b.isRented = newArryIsRented
          b.Budget = Budget
          window.localStorage.setItem(userNow, JSON.stringify(b))
        }
      })
    }
  }
  catalog = () => {
    window.localStorage.setItem('now', "catlog")
  }

  render() {
    return (

      <Router>
        <div>
          <Link to="/">Home  || </Link>
          <Link to="/Catalog" onClick={this.catalog}>Catalog </Link>
          <div className="Budget">Budget: {this.state.Budget}$</div>
          <Route path="/" exact render={() => <Landing users={this.state.users} movies={this.state.movies} pushNewUser={this.pushNewUser} />} />
          <Route path="/Catalog" exact render={() => <Catalog movies={this.state.movies} isRented={this.isRented} />} />
          {/* <Route path="/Moveis/:id" exact render={() => <Catalog movies={this.state.movies} isRented={this.isRented} />} /> */}
          <Route path="/Moveis/:id" exact render={({ match }) => (this.state.movies.find(m => m.id == match.params.id) ? (<MovieDetail match={match} movies={this.state.movies} />) : (<Catalog />))} />

          {/* <Route path="/Catalog/:id" exact render={({ match }) => (this.state[match.params.id] ? (<Catalog match={match} state={this.state} />) : (<Landing />))} /> */}
          {/* <a onClick={this.isRented}> sfhfjdnkbjdsnfkbjndsfk</a> */}

          {/* <Route /> */}
        </div>
      </Router>
    )
  }
}

export default App;
