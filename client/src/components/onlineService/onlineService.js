import React, { Component } from 'react';

class onlineService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
        };
    }

    render() {
        let servicePost = this.props.posts.filter(params => { return params.templates === "onlineService" })
        console.log(servicePost)
        return (
            <div id="socialNetwork">
                {servicePost.map((services, i) =>
                    <div key={i}>
                        <p>{services.author}</p>
                        <a href={services.links}>{services.links}</a>
                    </div>
                )}
            </div>
        )
    }
}
export default onlineService;