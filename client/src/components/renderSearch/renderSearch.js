import React from 'react';
import { Link } from 'react-router-dom';

 const renderSearch = ({author, links}) => {
    return (
        <div>
            <p>{author.author}</p>
            <a href={author.links}>Link</a>
        </div>
    )
}
export default renderSearch;