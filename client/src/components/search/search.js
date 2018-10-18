import React, { Component } from 'react';
import  {getSearch}  from '../api/api';

class search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: "",
            template: ""
        };
        this.props = props;
    }
    changeName({ name, value }) {
        this.setState({ [name]: value })
    }
    toClick = () =>{
        console.log(this.props)
        getSearch(this.state)
        .then(res => this.props.changeSearch(res));
    }
    render() {
        return (
            <div>
                <input type="text" name="author" onChange={element => this.changeName(element.target)} />
                <select name="template" onChange={element => this.changeName(element.target)}>
                    <option value="onlineService">Online Service</option>
                    <option value="onlineShop">Online Shop</option>
                    <option value="socialNetwork">Social Network</option>
                </select>
                <button onClick={() => this.toClick()}>Search</button>
            </div>
        )
    }


}



export default search;    