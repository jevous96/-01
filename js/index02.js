fetch('https://jsonplaceholder.typicode.com/todos')
.then((Response) => Response.text())
.then((result) => {
  const level = JSON.parse(result)
  const basic = level.filter( (str) => str.userId === 4 )
  console.log(basic)
  for(let i of basic){
    document.write(
      `${i.id} : ${i.title} <br>` 
    )
  }
})