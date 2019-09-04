import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Multiselect } from 'react-widgets'
import { Table, Button } from 'reactstrap';

import 'react-widgets/dist/css/react-widgets.css';
import './style.css'


class TableStatic extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            statisticsTable: false,
            authorsListSelected: [
                'All', 'egzample Author'
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event, options, authorsListSelected) => {
        //this.setState({ email: event.target.value, options,  });
        this.setState({ authorsListSelected });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.subscribeNewletter(this.state.authorsListSelected)
    }


    render() {
        const { newsletterStatus } = this.props;
        const { authorsListSelected, } = this.state;
        // 
        const { options } = this.state;
        return (
            <div>
                <p>
                    AUTHORS:
                </p>

                <Multiselect
                    data={this.state.authorsListSelected}
                    value={this.state.value} 
                    onChange={this.handleChange}
                    defaultValue={'All'}
                    //loadOptions={this.loadAuthorsOptions}
                />

                <Button
                    onClick={this.handleSubmit} value={this.state.value} >Submit</Button>
                <div>
                    {this.state.statisticsTable &&
                        <Table striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Word</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.statisticsTable.map((stat, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{stat.word}</td>
                                        <td>{stat.count}</td>
                                    </tr>)}
                            </tbody>
                        </Table>}
                </div>
                <div>

                    {newsletterStatus ? (
                        <p>
                            <strong>
                                Dziękukemy za zapisanie {this.props.email}
                            </strong>
                        </p>
                    ) : (
                            <form className="newsletterBody" onSubmit={this.handleSubmit}>

                                <label>
                                    <input type="email" value={this.state.value} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        )}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {authorsListSelected: state.authorsListSelected };
};

const mapDispatchToProps = dispatch => {
    return {
        subscribeNewletter: (param) => dispatch({
            type: 'SELECT_AUTHORS_LIST',
            authorsListSelected: param
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableStatic);