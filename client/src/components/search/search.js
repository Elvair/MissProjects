import React, { Component } from 'react';

class search extends Component {

    constructor() {
        super();
        this.state = {
            author: "",
            template: ""
        };

    }
    changeAuthor({ name, value }) {
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <input type="text" name="author" onChange={element => this.changeAuthor(element.target)} />
                <select name="template" onChange={element => this.changeAuthor(element.target)}>
                    <option value="onlineService">Online Service</option>
                    <option value="onlineShop">Online Shop</option>
                </select>

            </div>
        )
    }


}



export default search;    