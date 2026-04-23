import './App.css';
import Counter from './counter';
import Batsman from './batsman';
import Bowler from './bowler';

function App() {

  function handleClick() {
    alert("I am clicked.")
  }

  const handleClick3 = () => {
    alert("Thank you for click me.")
  }

  const handlePass5 = (num) => {
    const nuwNumber = num + 5;
    alert(nuwNumber);

  }


  return (
    <>
      <h1 className='firstText'>Get Started</h1>

      <Counter></Counter>
      <Batsman></Batsman>
      <Bowler></Bowler>

      <div className='wrapper'>
        {/* <button onClick="handleClick ()" className='button'>Click Me</button> */}

        <button onClick={handleClick} className='button'>Click Me</button>

        <button onClick={function handleClick2() {
          alert("My second click.")
        }} className='button'>Click Me 2</button>

        <button onClick={handleClick3} className='button'>Click Me Another Time</button>

        <button onClick={() => alert("Thanks For Click Me")} className='button'>Click Me 3</button>

        <button onClick={() => handlePass5(10)} className='button'>Click For Number</button>
      </div>
    </>
  )
}

export default App


