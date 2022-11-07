const people = 
  {
    userId: 9,
    title: "title9",
    completed: false
  }
  
  fetch('https://jsonplaceholder.typicode.com/todos/120',{
    method:'PUT',
    body:JSON.stringify(people)
  })
  .then(
    (Response) => Response.text()
  )
  .then(
    (result) => console.log(result)
  )