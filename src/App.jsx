import { useState } from 'react'

const App = () => {
  let [name, setName] = useState("Незнакомец")
  let [age, setAge] = useState(0)

  return (
    <>
      <h1>Привет, { name } { age }</h1>
      <input id='name' type='text' placeholder='Ваше имя'/> 
      <button onClick={ () => { setName(() => document.querySelector("#name").value) } }>Подтвердить</button><br/>
      <input id='age' type='number' placeholder='Ваш уровень'/> 
      <button onClick={ () => { setAge(() => document.querySelector("#age").value) } }>Подтвердить</button><br/>
    </>
  )
}

export default App