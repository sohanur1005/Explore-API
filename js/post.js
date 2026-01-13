function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')

    .then(res => res.json())
    .then(data => displayPosts(data))
}

/*  get the container element where we want to add the new element

*/

function displayPosts(posts){

    const postsContainer=document.getElementById('post-container')
    for(const post of posts)
    {
        const div=document.createElement('div');
        div.innerHTML= `  
          <h4>User-</h4>
          <h5>Posts: title</h5>
          <p>Post Description</p>
        
        `;
    }
}


