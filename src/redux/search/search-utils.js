//import shopData from '../../pages/shop/shop-data';
export const SearchFunc = (string, shopData) => {if(string){
const seacrhArray = [];
   const collections = Object.keys(shopData).map(key => shopData[key]);
   const items = collections.map(collection => collection.items);
   const searchItemsArrays= items.map(item => item.filter(items => items.name.toLowerCase().includes(string.toLowerCase())));
   searchItemsArrays.map(searchItemsArray => searchItemsArray.map(searchItem=> seacrhArray.push(searchItem)));
   if (seacrhArray.length !== 0){
   return seacrhArray;}
   else return null;
}
}