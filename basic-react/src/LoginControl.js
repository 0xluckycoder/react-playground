import React from 'react';

function UserGreeting () {
    return <h2>Welcome User</h2>
}

function GuestGreeting () {
    return <h2>Welcome Guest</h2>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

function LoginButton(props) {
    return <button onClick={props.onClick}>login</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>logout</button>
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogout() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn;
        
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogout} />
        } else {
            button = <LoginButton onClick={this.handleLogin} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <h1>hello world</h1>
                {button}
            </div>
        )
    }
}

export default LoginControl;