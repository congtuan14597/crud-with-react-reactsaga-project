import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="title">
                <a className="title-link" href="/"> {this.props.title} </a>
            </div>
        );
    }
}

export default Title;
