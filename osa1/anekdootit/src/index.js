import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ header }) => (
  <h1>{header}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  const randomInt = () => {
    return Math.floor(Math.random() * 6)
  }

  const iterateVotes = () => {
    let count = parseInt(votes[selected]) + 1
    let voteObj = {...votes}
    voteObj[selected] = count
    return voteObj
  }

  return (
    <div>
      <Header header="Anecdote of the day" />
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={() => setSelected(randomInt())} text="Next anecdote" />
      <Button handleClick={() => setVotes(iterateVotes())} text="Vote" />
      <Header header="Anecdote with most votes" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often!',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understan. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))