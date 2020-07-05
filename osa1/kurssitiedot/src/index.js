import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  const part1 = props.content[0]
  const part2 = props.content[1]
  const part3 = props.content[2]

  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

const Part = ({ part }) => {
  const { name, exercises } = part

  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({ content }) => {
  const total = () => content[0].exercises + content[1].exercises + content[2].exercises

  return (
    <p>
      Number of exercises {total()}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))