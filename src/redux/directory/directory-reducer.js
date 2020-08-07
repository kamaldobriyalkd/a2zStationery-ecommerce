//=====================
//images for menu-items
import img1 from '../../components/menu-item/img1.jpg';
import img2 from '../../components/menu-item/img2.jpg';
import img3 from '../../components/menu-item/img3.jpg';
import img4 from '../../components/menu-item/img4.jpg';
import img5 from '../../components/menu-item/img5.jpg';
//=====================

const INITIAL_STATE ={
    sections:[
        {
            title:'GEOMETRY',
            img: img1,
            id:1,
            linkUrl: 'shop/geometry'
        },
        {
            title:'E - COMPONENTS',
            img: img2,
            id:2,
            linkUrl: 'shop/e%20-%20components'
        },
        {
            title:'ART & CRAFT',
            img: img3,
            id:3,
            linkUrl: 'shop/art%20&%20craft'
        },
        {
            title:'WRITING MATERIALS',
            img: img4,
            size: 'large',
            id:4,
            linkUrl: 'shop/writing%20material'
        },
        {
            title:'SPORTY & GAMES',
            img: img5,
            size: 'large',
            id:5,
            linkUrl: 'shop/sporty%20&%20games'
        }
    ]
};

const DirectoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
};

export default DirectoryReducer;