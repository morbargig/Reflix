import React, { Component } from 'react';


class MovieDetail extends Component {
    // constructor() {
    //     super()

    // }

    render() {
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        let m = this.props.movies.find(m => m.id === id)
        return (
            <div>
                <h1>{m.title}</h1>
                <img className="img" src={m.img} alt="" style={{width : 375 + "px" }} />
                <br></br>
                <div className="year"> {m.year}</div>
                {/* <h1 onClick={this.isRented}> + </h1> */}
                <a>{m.descrShort}</a>
                 </div>
        )
    }

}

export default MovieDetail;
