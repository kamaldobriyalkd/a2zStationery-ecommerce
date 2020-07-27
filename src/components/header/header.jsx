import React from 'react';

import logo from './logo1.jpg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

import {connect} from 'react-redux';

import './header.scss';
class Header extends React.Component{

       func = () => {
            if(this.props.currentUser.displayName){
                var  y = "";
                var x = this.props.currentUser.displayName.split("");
                for(var i=0;i<x.length; i++){
                if(x[i]===" ") break;
                y+=x[i].toUpperCase();}
                return y;
                }
        }
    

    render(){
        return(
        <div className='header'>
            <Link to='/'>
                <img src={logo} className='logo-container' alt="logo"/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT US</Link>
                
                {   this.props.currentUser ?
                    <div className='option' >{this.func()}</div>
                    :
                    null
                }
                {
                    this.props.currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
                {
                this.props.cart ?
                null
                : 
                <CartDropdown/>
                }
        </div>
        );
    }
}  

const mapStateToProps = createStructuredSelector ({
    cart        : selectCartHidden,
    currentUser : selectCurrentUser
});

export default connect(mapStateToProps)(Header);
