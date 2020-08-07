import React from  'react';

import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collectionoverview/collectionoverview';
import CollectionPage from '../collection/collectionpage';
import searchpage from '../searchpage/searchpage';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {updateCollection} from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/with-spinner/with-spinner';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component { 
    state={
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        const collectionsMap =convertCollectionsSnapshotToMap(snapshot);
        this.props.updateCollection(collectionsMap);
        this.setState({loading: false});
        } );
    }

    render(){
       const {match} = this.props;
       const {loading} = this.state;
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
        <Route exact path={`${match.path}/search/:searchInput`} component={searchpage}/>
    </div>
);
}
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);