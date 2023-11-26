window.addEventListener ('load', () => {

    const div = document.getElementById('container')

    const printPosts = (posts) => {

        posts.forEach( post => {

            div.innerHTML += `
                <div class="card">
                    <h4 class="title">${post.title}</h4>
                    <p class="content">${post.body}</p>
                </div>
                `;
        })
    }

    fetch('https://jsonplaceholder.typicode.com/posts')

    .then(response => response.json())

    .then(obj => printPosts(obj))

    .catch(error => console.warn(error))

})