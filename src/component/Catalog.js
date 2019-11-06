import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios'


class Catalog extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    updateTestText = (e) => {
        let name = e.target.name
        let text = e.target.value
        console.log(typeof text)
        if (typeof text === "string") {
            this.setState({
                [name]: text
            }, async function () {
                // console.log(this.state.testText)
                if (name === "testText") {
                    this.setState({
                        sarchMoveis: this.props.movies.filter(m => m.title.includes(this.state.testText))
                    })
                } else {
                    if (text !== "") {

                        const res = await axios.get(`https://www.omdbapi.com/?t=${text}+&apikey=67c20ef2&/`)
                        console.log(res.data)

                        let newMovie = {
                            price: ((Math.floor(Math.random() * 7) + 1) * 5) + 5,
                            id: this.props.movies.length,
                            isRented: false,
                            title: res.data.Title,
                            year: res.data.Year,
                            img: res.data.Poster,
                            descrShort: res.data.Plot,
                            newMovie: true
                        }
                        this.setState({ newMovie })
                        console.log(newMovie)
                    }
                }
                // console.log(this.props.movies.filter(m => m.title.includes(this.state.testText)))
            })
        }
        if (text === "") {
            this.setState({ sarchMoveis: undefined, newMovie: undefined })
        }
    }

    sarchMoveis = () => {
        this.setState({
            sarchMoveis: this.props.movies
        })
    }


    render() {
        let myNewData
        if (this.state.sarchMoveis === undefined) {
            myNewData = this.props.movies
        }
        else {
            myNewData = this.state.sarchMoveis

        } return (
            < div >
                {/* {console.log(myNewData.filter(m => m.isRented === true)[0] === undefined)} */}

                <input name="testText" type="text" value={this.state.testText} onChange={this.updateTestText} placeholder="Search form your movies" />
                <input name="testText1" type="text" value={this.state.testText1} onChange={this.updateTestText} placeholder="Search for new movie" />

                <h1>
                    {this.state.newMovie ?
                        <div>   New Movie :
<Movie m={this.state.newMovie} isRented={this.props.addNewMovie} />
                        </div>
                        :
                        null
                    }
                    {myNewData.filter(m => m.isRented === true)[0] !== undefined ? "Rented :" : null}
                    {myNewData.filter(m => m.isRented == true).map(m => < Movie m={m} isRented={this.props.isRented} />)}
                    {myNewData.filter(m => m.isRented === false)[0] !== undefined ? "Movies :" : null}
                    {myNewData.filter(m => m.isRented == false).map(m => < Movie m={m} isRented={this.props.isRented} />)}
                </h1>
            </div >)
    }
}

export default Catalog;
