import React, { Component } from 'react';

class socialNetwork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
        };
    }

    render() {
        let socialPost = this.props.posts.filter(params => { return params.templates === "socialNetwork" })
        console.log(socialPost)
        return (
            <div id="socialNetwork">
                {socialPost.map((socials, i) =>
                    <div key={i}>
                        <p>{socials.author}</p>
                        <a href={socials.links}>{socials.links}</a>
                    </div>
                )}
            </div>
        )
    }
}
export default socialNetwork;