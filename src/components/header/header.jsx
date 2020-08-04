import React from 'react';

import logo from './logo1.jpg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import SearchBar from '../search-bar/search-bar';

import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

import {connect} from 'react-redux';



import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header-styles';

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
        <HeaderContainer>
            <Link to='/'>
                <LogoContainer src={logo} alt="logo"/>
            </Link>
            <OptionsContainer>
                <SearchBar/>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT US</OptionLink>
                
                {   this.props.currentUser ?
                    <OptionLink as='div' >{this.func()}</OptionLink>
                    :
                    null
                }
                {
                    this.props.currentUser ?
                    <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
                {
                this.props.cart ?
                null
                : 
                <CartDropdown/>
                }
        </HeaderContainer>
        );
    }
}  

const mapStateToProps = createStructuredSelector ({
    cart        : selectCartHidden,
    currentUser : selectCurrentUser
});

export default connect(mapStateToProps)(Header);
