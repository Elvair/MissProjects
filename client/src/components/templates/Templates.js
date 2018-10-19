import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './templates.css';
import axios from 'axios';

class Templates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3010/projectTemplate')
            .then((response) => {
                this.props.drawSocial(response.data);
                this.setState({ posts: response.data });

            })
    }

    render() {
        return (
            <div id="main">                
                <li><Link to="/template/socialNetwork">Social Network</Link></li>
                <li><Link to="/template/onlineService">onlineService</Link></li>
                <li><Link to="/template/onlineShop">onlineShop</Link></li>            
            </div>
        )
    }

}


export default Templates;









