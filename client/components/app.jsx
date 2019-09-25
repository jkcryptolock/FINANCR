import React from 'react';
import Topbar from './navbar.jsx';
import Body from './body.jsx';

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

    loginUser(username, password) {
        console.log('logged in')
        this.setState( { welcome: false,
                         auth: true,
                         user: username
                        });
    }

    createUser(username, password) {
        console.log('created User')
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