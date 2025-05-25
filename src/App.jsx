import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import MyComponent2 from './components/my-component-2'
import Login from './components/login'
import Parent from './components/parent'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from './blogs'
import Contacts from './contact'
import PageNotFound from './404'

function App() {
  const name="Peter"

  return (
    <>
      {/* <div>Hello World!!!</div> */}
      {/* <MyComponent name={name} /> */}
      {/* <MyComponent2 name="John" /> */}
      {/* <Login/> */}
      {/* <Parent /> */}

      

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Parent />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
