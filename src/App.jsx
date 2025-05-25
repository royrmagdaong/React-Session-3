import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import MyComponent2 from './components/my-component-2'
import Login from './components/login'

function App() {
  const name="Peter"

  return (
    <>
      {/* <div>Hello World!!!</div> */}
      {/* <MyComponent name={name} /> */}
      {/* <MyComponent2 name="John" /> */}
      <Login/>
    </>
  )
}

export default App
