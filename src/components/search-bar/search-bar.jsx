import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchAction} from '../../redux/search/search-actions';

import './search-bar.scss';

class SearchBar extends React.Component{

    constructor(){
        super();

        this.state={
            searchInput : ""
        }
    }
    
    render(){
    return(

        <div className='search-bar'>
            <input type='search'  onChange={e => this.setState({searchInput: e.target.value})} placeholder='search for items'/>
            {
                this.state.searchInput ?
            <button type="submit" onClick ={() =>{this.props.history.push(`/search/${this.state.searchInput}`); this.props.searchString(this.state.searchInput);}}><i className="fa fa-search"></i></button>
                : null
            }
        </div>
    );
    }
}


const mapDispatchToProps = dispatch => ({
    searchString: string => dispatch(searchAction(string))
})

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));