import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import MyComponent2 from './components/my-component-2'

function App() {
  const name="Peter"

  return (
    <>
      {/* <div>Hello World!!!</div> */}
      <MyComponent name={name} />
      {/* <MyComponent2 name="John" /> */}
    </>
  )
}

export default App
