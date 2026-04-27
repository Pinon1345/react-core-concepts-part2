import './App.css';
import Counter from './counter';
import Batsman from './batsman';
import Bowler from './bowler';
import Users from './users';
import Friends from './Friends';
import Comments from './Comments';
import Opinions from './Opinion';
import Posts from './Posts';
import Players from './Players';
import { Suspense } from 'react';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json());


const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments")
  .then(response => response.json());

const fetchOpinions = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments")
  return response.json();
}


const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  return response.json();
}



const fetchFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json();
}


function App() {

  const postsPromise = fetchPosts();

  const friendsPromise = fetchFriends();

  const opinionPromise = fetchOpinions();

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

      <Players></Players>

      <Suspense fallback={<h3>Please wait! Your posts are coming...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>

      </Suspense>

      {/* <Suspense fallback={<h3>Loading ... </h3>}>

        <Users fetchUsers={fetchUsers}></Users>

      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>

      <Suspense fallback={<h3>Comments are loading ...</h3>}>
        <Comments fetchComments={fetchComments}></Comments>

      </Suspense> */}

      {/* <Suspense fallback={<h3>Opinions are loading ...</h3>}>
        <Opinions opinionPromise={opinionPromise}></Opinions>

      </Suspense> */}

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


