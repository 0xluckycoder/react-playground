import React from 'react';

function WarningBanner(props) {
    // this hides the element because it first return
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning !
        </div>
    );
}

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        )
    }
}