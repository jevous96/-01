console.log('start')
fetch('https://jsonplaceholder.typicode.com/todos/3')
.then( (item) => item.text())
.then((result) => {console.log(result)})

console.log('end')