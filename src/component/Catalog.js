import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    updateTestText = (e) => {
        let text = e.target.value
        console.log(typeof text)
        if (typeof text === "string") {
            this.setState({
                testText: text
            }, function () {
                // console.log(this.state.testText)
                this.setState({
                    sarchMoveis: this.props.movies.filter(m => m.title.includes(this.state.testText))
                })
                // console.log(this.props.movies.filter(m => m.title.includes(this.state.testText)))
            })
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
                <input type="text" value={this.state.testText} onChange={this.updateTestText} placeholder="sarch for a movie"/>
                <h1>Rented :
                {myNewData.filter(m => m.isRented == true).map(m => < Movie m={m} isRented={this.props.isRented} />)}
                    Catalog :
                    {myNewData.filter(m => m.isRented == false).map(m => < Movie m={m} isRented={this.props.isRented} />)}
                </h1>
            </div >)
    }
}

export default Catalog;
