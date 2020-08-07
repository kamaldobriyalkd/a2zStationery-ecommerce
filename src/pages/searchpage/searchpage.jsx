import React from 'react';
import {connect} from 'react-redux';
import { selectSearchData } from '../../redux/search/search-selectors';
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../../components/collectionitem/collectionitem';
import './searchpage.scss';

const SearchPage = ({items, match}) => 
{console.log(items); return(

    <div className='search-page'>
        {
            items.length !== 0 ?
            <div className='title-1'>You searched for "{match.params.searchInput}"</div>
            : <div className='title-2'>What are you searching for?</div>
        }
        <div className='items'>
        {
            items ?
            items.map(item => (
            <CollectionItem key={item.id} item={item}/>
            ))
            : null
        }
        </div>
    </div>
);}

const mapStateToProps = createStructuredSelector({
    items: selectSearchData
})

export default connect(mapStateToProps)(SearchPage);