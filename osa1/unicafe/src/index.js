import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const StatisticsLine = ({ text, value, marker }) => {
  if (value) {
    return (
      <tr>
        <th>{text}</th>
        <th>{value}{marker}</th>
      </tr>
    )
  } else {
    return null
  }
}

const Header = ({ header }) => (
  <h1>{header}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ states }) => {
  const all = states[0] + states[1] + states[2]
  const avg = (states[0] - states[2]) / all
  const positive = (states[0] / all) * 100

  if (all > 0) {
    return (
      <table>
        <tbody>
        <StatisticsLine text="Good" value={states[0]} />
        <StatisticsLine text="Neutral" value={states[1]} />
        <StatisticsLine text="Bad" value={states[2]} />
        <StatisticsLine text="All" value={all} />
        <StatisticsLine text="Average" value={avg} />
        <StatisticsLine text="Positive" value={positive} marker="%" />
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedbackHeader = 'Give feedback'
  const statsHeader = 'Statistics'

  return (
    <>
      <Header header={feedbackHeader} />
      <div>
        <Button handleClick={() => setGood(good +1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
        <Button handleClick={() => setBad(bad +1)} text="Bad" />
      </div>
      <Header header={statsHeader} />
      <Statistics states={[good, neutral, bad]} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))