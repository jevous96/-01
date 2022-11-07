fetch('https://jsonplaceholder.typicode.com/users')
.then((Response) => Response.text())
.then(
  (result) => {
    const users = JSON.parse(result)
    const {id} = users[0]
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((response) => response.text())
    .then((posts) =>{
      console.log(posts)
    })
  }
)