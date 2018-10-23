import React from 'react';

 const renderSearch = ({author, links}) => {
    return (
        <div>
            <p>{author.author}:  <a href={author.links}>{author.links}</a></p>
        </div>
    )
}

export default renderSearch;