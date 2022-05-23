import React from "react";
// multiple controlled inputs
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        alert('A name was submitted ', this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                <label>Email:</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

/*
import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        alert('A name was submitted ', this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
*/