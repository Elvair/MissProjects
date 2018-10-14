import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import AuthService from '../auth/AuthService';
import './templates.css';
import axios from 'axios';

class templates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3010/project')
            .then((response) => {
                console.log(response.data)
                this.setState({ posts: response.data });

            })
    }

    render() {
        return (
            <div id="main">
                {this.state.posts[0] !== undefined ? this.state.posts.map(x => <p>{x.templates}</p>) : ''}
                <header>
                    <div className="wrapper">
                        <nav>
                            <h1>Main Navigation</h1>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Templates</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }

}


export default templates;









