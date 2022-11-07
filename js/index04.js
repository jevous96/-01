const user = {
  userId : 4,
  title : 'title01',
  completed : true
}
fetch('https://jsonplaceholder.typicode.com/todos',
{
  method:'POST',
  body: JSON.stringify(user)
}
)
.then( (Response) => Response.text())
.then(
  (result) => {console.log(result)}
)