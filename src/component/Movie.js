import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Movie extends Component {
    constructor() {
        super();
        this.state = {
            notNewMovie: false
        }
    }

    isRented = () => {
        console.log(this.props.m.newMovie)
        if (this.props.m.newMovie === true) {
            console.log('kjgkbkjbkjbkjkjbkjb')
            this.setState({ notNewMovie: !this.state.notNewMovie }, function () { console.log(this.state.notNewMovie) })
        }
        this.props.isRented(this.props.m)
    }

    render() {
        let m = this.props.m
        return (
            <div>
                <h1>{m.title}</h1>
                <Link to={`/Moveis/${m.id}`} ><img class="img" src={m.img} alt={m.title} style={{ width: 375 + "px" }} /></Link>


                <br></br>
                {/* <div className="year"> {m.year}</div> */}
                {this.props.m.newMovie ? 
                <a onClick={this.isRented}> { this.state.notNewMovie !== false ? <h1>-</h1> : <h1>+</h1>} </a>
                :
                <a onClick={this.isRented}> {m.isRented ? <h1>-</h1> : <h1>+</h1>} </a>

            }
            </div>)
    }

}

export default Movie;
