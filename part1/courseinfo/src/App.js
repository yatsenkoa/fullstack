import React from 'react'

const App = () => {
  const course = 'Half Stack application develpment'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    <div>
      <Header courseName={course}/>
      <Content part={part1} exercises={exercises1}></Content>
      <Content part={part2} exercises={exercises2}></Content>
      <Content part={part3} exercises={exercises3}/>

      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>

  )
}
export default App;

const Header = (props) => (
  <div>
  <h1>{props.courseName}</h1>
  </div>
)

const Content = (props) => (
  <div>
  <p>{props.part} {props.exercises}</p>
  </div>
)

const Total = (props) => (
  <div>
  <p>Number of exercises {props.one + props.two + props.three}</p>
  </div>
)