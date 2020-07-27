import React from 'react';

import {withRouter} from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({title, img, size, linkUrl, match, history}) =>(
    
<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

<div className= 'bgImg'
style={{ backgroundImage : `url(${img})`}}
/>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
);

export default withRouter(MenuItem);