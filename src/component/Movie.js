import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Movie extends Component {
    isRented = () => {
        this.props.isRented(this.props.m.id)
    }

    render() {
        let m = this.props.m
        return (
            <div>
                <h1>{m.title}</h1>
          <Link to={`/Moveis/${m.id}`} ><img class="img" src={m.img} alt=""/></Link>
                

                <br></br>
                {/* <div className="year"> {m.year}</div> */}
                <a onClick={this.isRented}> {m.isRented? <h1>-</h1> : <h1>+</h1>} </a>
            </div>)
    }

}

export default Movie;
