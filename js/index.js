// JavaScript Object Notation
// JASON


const user = {id:11, name:'Gorib Amir', job: 'actor'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop ={
    name: 'Alia Store',
    address: 'Ranbir road',
    product:['laptop','mobile','pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);