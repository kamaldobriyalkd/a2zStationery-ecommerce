import shopData from '../../pages/shop/shop-data';
export const SearchFunc = (string) => {if(string){
const seacrhArray = [];
   const collections = Object.keys(shopData).map(key => shopData[key]);
   const items = collections.map(collection => collection.items);
   const searchItemsArrays= items.map(item => item.filter(items => items.name.toLowerCase().includes(string.toLowerCase())));
   searchItemsArrays.map(searchItemsArray => searchItemsArray.map(searchItem=> seacrhArray.push(searchItem)));
   console.log(seacrhArray);
   return seacrhArray;}
}