import React from "react";
import UseContextHook from './Components/Hooks/UseContextHook';

export default function App() {
  
  return (
    <div>
      <UseContextHook />
    </div> 
  )
}

/*
import React from "react";
import Useeffect from './Components/Hooks/Useeffect.js';

export default function App() {
  
  return (
    <div>
      <Useeffect />
    </div> 
  )
}

import React, { useState } from "react";
import Usestate from './Components/Hooks/Usestate.js';

export default function App() {
  
  return (
    <div>
      <Usestate />
    </div> 
  )
}


import React from "react";

function App() {
  return (
    <div>
      <WelcomeDialog />
    </div>
  );
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

export default App;


// lifting state
import React from "react";
import Calculator from './Components/Calculator.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>navigation bar</h1>
        <Calculator />
      </div>
    )
  }
}

// Forms
import React from "react";
import Form from "./Components/Form.js"


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>navigation bar</h1>
        <Form />
      </div>
    )
  }
}


// List and keys
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return (
      <div className="app-wrapper">
        <h1>navigation bar</h1>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

// conditionally hide component 
import React from "react";
import Page from './Components/Page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>navigation bar</h1>
        <Page />
      </div>
    )
  }
}

// mailbox 
import React from "react";
import Mailbox from './Mailbox';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>hello</h1>
        <Mailbox count={5} />
      </div>
    )
  }
}

// login control
import React from "react";
import LoginControl from './LoginControl';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <LoginControl />
      </div>
    )
  }
}

// conditional rendering 
function UserGreeting() {
  return <h1>Hello User</h1>
}

function GuestGreeting() {
  return <h1>Hello Guest</h1>
}

function App() {

  const isLoggedIn = false;

  return (
    <div className="wrapper">
      <h1>navigation bar</h1>
      <div className="content">
        {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      </div>
    </div>
  );
}

export default App;
*/

/*
// handling events
import React from "react";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Hello</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}
*/

/* 
// original
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/