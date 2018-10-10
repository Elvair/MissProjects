import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class home extends Component {          //
    constructor(props) {
        super(props);
        this.state = this.home;
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