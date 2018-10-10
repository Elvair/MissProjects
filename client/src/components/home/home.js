import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';

class home extends Component { 

    state = {
        listItem:[]
    };

    getProjects() {
        axios.get('http://localhost:3010/api/')
        .then(function (response) {
            console.log(response)
            if(response!==undefined){
                this.setState({listItem: response.data});
            }
        
      })
    }

    render() {
            return (
            <div id="main">
                <header>
                    <div className="wrapper">
                        <nav>
                            <h2>Main Navigation</h2>
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
export default home;