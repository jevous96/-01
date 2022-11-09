async function str(){
  // 실행
  try{
    const response = await fetch('https://jsonplaceholdere.typicode.com/todos/1')
    const result = await response.text()
    console.log(result)
  }
  // error
  catch(error){
    console.log('error입니다.')
  }
  // 마감
  finally{
    console.log('작업 끝났습니다.')
  }
}
str();