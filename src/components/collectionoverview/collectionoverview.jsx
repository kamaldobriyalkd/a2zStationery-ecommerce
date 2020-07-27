import React from 'react';

import './collectionoverview.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';

import CollectionPreview from '../../components/collectionpreview/collectionpreview';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
            {
    collections.map(({id, ...otherProps})=>(
        <CollectionPreview key={id} {...otherProps} />
    ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);