// then(실행,error)
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(
  (Response) => Response.text()
.then(
  (result) => {
    console.log('welcome')
    console.log(result)
  }
)
.catch(() => console.log(`error 가 발생되었습니다.`))
.finally(() => console.log('작업이 끝났습니다.'))

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(
  (Response) => Response.text(),(error) => console.log(error)
)
.then(
  (result) => {
    console.log(result)
  }
) */