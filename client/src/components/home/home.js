import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';


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
                {this.state.posts[0] !== undefined ? this.state.posts.map(x => <p>{x.templates}</p>) : ''}

            </div>
        )

    }



}
export default home;