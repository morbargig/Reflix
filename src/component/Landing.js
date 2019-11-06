import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {
    localStorage = (e) => {
        let name = e.target.text
        window.localStorage.setItem('now' ,name)
        if (window.localStorage.getItem(name) == null) {
            let user = this.props.users.find(u => u.name == name)
            window.localStorage.setItem(name, JSON.stringify(user))
            this.localStorage(e)
            // window.localStorage.setItem('now' ,name)
        } else {
            // let x = window.localStorage.getItem(name)
            let myUser = JSON.parse(window.localStorage[name])
            // console.log(myUser)
            // this.pushNewUser(myUser)
            this.props.pushNewUser(myUser)
            //  console.log(window.localStorage)

        }

        // let user = {
        //     isRented : 0,
        //     Budget : 50
        // }
        // window.localStorage.setItem(  name , JSON.stringify(user)) 
        // console.log(window.localStorage)
        // window.localStorage[name].Budget = 40
        // x.Budget = 40
        // window.localStorage.setItem(  name , JSON.stringify(x))
        // } else { }
    }

  

    render() {

        return (
            <div>
                <h1>Reflix</h1>
                <h1>who's watching?</h1>
                <div id="users">
                    {this.props.users.map(u => <h4  className={u.name}><Link 
                     onClick={this.localStorage}
                      to="/Catalog">{u.name}</Link></h4>
                    )}
                </div>
            </div>
        )
    }

}

export default Landing;
