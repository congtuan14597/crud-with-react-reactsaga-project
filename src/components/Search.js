import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ""
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyWord);
    }

    render() {
        return (
            <div className="header-search">
                <form className="form-search">
                    <input onChange={ this.onChange } value={ this.state.keyWord } name="keyWord" type="text" className="form-input" placeholder="Search Intern" />
                    <input onClick= { this.onSearch } type="button" name="commit" defaultValue="Search" className="form-button-search" data-disable-with="Search" />
                </form>
            </div>
        );
    }
}

export default Search;
