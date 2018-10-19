import React, { Component } from 'react';
import Search from '../search/search';
import RenderSearch  from '../renderSearch/renderSearch';

class dadSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: "",
            template: "",
            search: []
        };

    }
    changeSearch(newSearch){
        this.setState({search: newSearch})
    }
    render() {
        return (
            <div className="Searches" >
                <Search changeSearch={(element) => this.changeSearch(element)} />
                {this.state.search.map(willRender => <RenderSearch author={willRender}/>)}
            </div>    
        )
    }
}

export default dadSearch;    