import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Search from './Search';
import TableRow from './TableRow';
import { actTakeInterns } from "./../actions/index";
import { connect } from 'react-redux';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ""
        }
    }

    componentDidMount() {
        // callApi("interns", "GET", null).then(res => {
        //     this.setState({
        //         listInterns: res.data.slice((this.state.activePage - 1) * 7, this.state.activePage * 7)
        //     });
        // })
        this.props.takeAllInterns(this.props.interns);
    }

    onSearch = (keyWord) => {
        this.setState({
            keyWord: keyWord
        });
    }

    render() {
        const { error } = this.props;
        var { interns } = this.props;
        var { keyWord } = this.state;
        if(keyWord) {
            interns = interns.filter((intern) => {
                return intern.name.indexOf(keyWord) !== -1;
            })
        }
        
        var tabRow = interns.map(function(object, index) {
            return <TableRow obj={ object } index={ index } key={ index }></TableRow>
        })

        return (
            <div>
                { error && <h3>Error: {error.response.data}</h3> }
                <div className="title-search">
                    <Title title="List Interns"></Title>
                    <Search onSearch={ this.onSearch }></Search>
                </div>
                <div className="list-interns">
                    <table className="table table-striped table-intern">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Name</th>
                                <th scope="col">School</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            { tabRow }
                        </tbody>
                    </table>
                </div>
                <Link to={"/create"} className="btn btn-primary">New Intern</Link>
            </div>
        );
    }
}
//lay tat ca interns tu store
const mapStateToProps = state => {
    return {
        interns: state.interns,
        error: state.error
    }
}
//luu len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        takeAllInterns: (interns) => {
            dispatch(actTakeInterns(interns));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
