import {SearchFunc} from './search-utils';
const INITIAL_STATE = {
    searchData : []
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'searchfor' : return{
            ...state,
            searchData : SearchFunc(action.payload)
        }
        default : return{
            state
        }
    }
}

export default SearchReducer;