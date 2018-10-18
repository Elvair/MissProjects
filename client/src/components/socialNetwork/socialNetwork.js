import React, {Component} from 'react';
import {Link} from 'react-dom';


class socialNetwork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
        };
    }
     
    render() {
        let socialPost = this.props.posts.filter(params => {return params.templates === "socialNetwork"})
        console.log(socialPost)
        return (
            <div id="socialNetwork">
                {this.state.posts.map(socials => <p>{socials.templates}</p>)}      
            </div>
         
        )
    }

}

        
export default socialNetwork;