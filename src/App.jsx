
import './App.css'
import Team from './Team'
import Counter from './counter'
import Friends from './friends'
import Users from './users'

function App() {

  const handleClick2 = () =>{
    alert('handleClicked 2')
  }

function handleClick(){
  alert('button')
}

const addToFive =(num)=>{
  alert(num+5);
}

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>

      <Users></Users>
      <Counter> </Counter>
      <Team> </Team>
      <button onClick={handleClick}>Click Me</button><br /><br />
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={ ()=>{
        alert('clicked 3')
      }}> click 3</button>
      <button onClick={()=>addToFive(3)}>four</button>
    </>
  )
}

export default App
