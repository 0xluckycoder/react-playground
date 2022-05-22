import React from 'react';

function Greeting(props) {

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

        const isLoggedIn = this.props.isLoggedIn;
        
        let button;

        if (isLoggedIn) {
            button = <LoginButton onClck={this.handleLogout} />
        } else {
            button = <LogoutButton onClck={this.handleLogin} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
            </div>
        )
    }
}

export default LoginControl;