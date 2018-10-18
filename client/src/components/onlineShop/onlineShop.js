import React from 'react';


const onlineShop = ({params}) => {
    console.log(params)
    return (
                // <div id="socialNetwork">
        //     {this.state.posts[0] !== undefined ? this.state.posts.map(x => <div><p>{x.templates}</p><Link to={`/${x.templates}`}>Link</Link></div>) : ''}        
        // </div>
        <div>
            
            <p>{params.template}</p>
        </div>
    )
}    
export default onlineShop;