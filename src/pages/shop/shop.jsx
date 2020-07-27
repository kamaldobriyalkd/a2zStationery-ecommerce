import React from  'react';

import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collectionoverview/collectionoverview';
import CollectionPage from '../collection/collectionpage';

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);



export default ShopPage;