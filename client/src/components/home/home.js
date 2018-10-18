import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

import Templates from '../templates/Templates';
import DadSearch from '../dadSearch/dadSearch';

import './home.css';

class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3010/')
            .then((response) => {
                console.log(response.data)
                this.setState({ posts: response.data });

            })
    }

    render() {
        return (
            <div id="main">
                {/* {this.state.posts[0] !== undefined ? this.state.posts.map(x => <p>{x.templates}</p>) : ''} */}
                <Templates></Templates>
                <DadSearch></DadSearch>
            </div>
        )

    }



}
export default home;