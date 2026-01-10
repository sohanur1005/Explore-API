
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