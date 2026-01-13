const loadComents=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>console.log(data));
}

const loadComents2=async()=>{
    const res=await  fetch('https://jsonplaceholder.typicode.com/comments');
    const data=await res.json();
    console.log(data)

}