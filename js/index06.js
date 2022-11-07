fetch('https://jsonplaceholder.typicode.com/todos/3',{
  method : 'DELETE'
})
.then(
  (Response) => Response.text()
)
.then(
  (result) => {
    console.log(result)
  }
)