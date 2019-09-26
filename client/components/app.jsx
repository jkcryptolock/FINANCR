import React from 'react';
import Topbar from './navbar.jsx';
import Body from './body.jsx';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            welcome: true,
            about: false,
            auth: false,
            user: ''
        };

    }

    selectPage(target) {
        for (let key in this.state) {
            if (key === target) {
                this.setState( { [target]: true });
            } else if (key !== 'auth' && key !== 'user') {
                this.setState( { [key]: false })
            }
        }
    }

    loginUser(email, password) {
        // axios.get(`/auth?email=${email}&password=${password}`)
        // .then(result => {
        //     if (result.data === 'success') {
        //         this.setState( { welcome: false,
        //             auth: true,
        //             user: email
        //            });
        //     } else {
        //         console.alert('Incorrect Account Information');
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // });
        this.setState( { welcome: false,
            auth: true,
            user: email
           });
    }

    createUser(email, password) {
        // axios.post(`/user?email=${email}&password=${password}`)
        // .then(result => {
        //     if (result.data === 'success') {
        //         this.setState( { welcome: false,
        //             auth: true,
        //             user: email
        //            });
        //     } else {
        //         console.alert('Account Creation Failure');
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // });
    }

    logOutUser() {
        this.setState( { welcome: true,
                         auth: false,
                         user: ''
                        }
        );
    }

    render() {
        return (
            <>
            <Topbar loggedin={this.state.loggedin} 
                    selectPage={this.selectPage.bind(this)} 
                    createUser={this.createUser.bind(this)}
                    logOutUser={this.logOutUser.bind(this)}
                    auth={this.state.auth}
            />
            <Body welcome={this.state.welcome}
                  about={this.state.about}
                  auth={this.state.auth} 
                  user={this.state.user}
                  loginUser={this.loginUser.bind(this)} 
            />
            </>
        )
    }

}