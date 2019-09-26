import React from 'react';
import Welcome from './welcome.jsx';
import About from './about.jsx';
import Userpage from './userpage.jsx';

const Body = (props) => {

    if (props.welcome) {
        return (
            <Welcome loginUser={props.loginUser} />
        )
    } else if (props.about) {
        return (
            <About />
        )
    } else if (props.auth) {
        return (
            <Userpage auth={props.auth} user={props.user} />
        )
    }

}

export default Body;