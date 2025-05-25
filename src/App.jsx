import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import MyComponent2 from './components/my-component-2'

function App() {

  return (
    <>
      <div>Hello World!!!</div>
      <MyComponent name="Peter" />
      <MyComponent2 />
    </>
  )
}

export default App
