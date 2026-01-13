function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')

    .then(res => res.json())
    .then(data => displayPosts(data))
}

/* 1. get the container element where we want to add the new element
2.create child element
3.set inner Text or html
4.appendchild

*/

function displayPosts(posts){

    const postsContainer=document.getElementById('posts-container')
    for(const post of posts)
    {
       
        console.log(post)
        
        const postDiv=document.createElement('div');
        postDiv.innerHTML= `  
          <h4>User-${post.userId}</h4>
          <h5>Posts: ${post.title}</h5>
          <p>Post Description: ${post.body}</p>
        
        `;
        postsContainer.appendChild(postDiv);
         postDiv.classList.add('posts')
    }
}


