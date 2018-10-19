import React, { Component } from 'react';
import axios from 'axios';
import DadSearch from '../dadSearch/dadSearch';
import './home.css';
import Content from '../contents/Contents';

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
                <Content></Content>
                <DadSearch></DadSearch>
                <p>Please, sign up or login to access! </p>
            </div>
        )
    }
}
export default home;