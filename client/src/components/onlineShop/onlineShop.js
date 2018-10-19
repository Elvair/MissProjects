import React, { Component } from 'react';

class onlineShop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
        };
    }

    render() {
        let shopPost = this.props.posts.filter(params => { return params.templates === "onlineShop" })
        console.log(shopPost)
        return (
            <div id="socialNetwork">
                {shopPost.map((shops, i) =>
                    <div key={i}>
                        <p>{shops.author}</p>
                        <a href={shops.links}>{shops.links}</a>
                    </div>
                )}
            </div>
        )
    }
}
export default onlineShop;