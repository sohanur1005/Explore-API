
const user={id:1,name:'Sohanur',job:'Student'

}
console.log(user)

const stringified=JSON.stringify(user)
console.log(stringified)
/*
output
{ id: 1, name: 'Sohanur', job: 'Student' }
{"id":1,"name":"Sohanur","job":"Student"}
*/


const shop={
    owner:'Sohanur Rahman',
    address:{
        street:'Kochukhet',
        city:'Khagan',
        country:'Bangladesh'
    },
    products:['Laptop','Microphone','Keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
}


console.log(shop)
const  shopJSON=JSON.stringify(shop);
console.log(shopJSON);

console.log(typeof(shop))
console.log(typeof(shopJSON))
// Convert  object to string using JSON.Parse
const shopObj=JSON.parse(shopJSON)
console.log(shopObj)