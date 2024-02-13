import React from 'react'
import UseState from './components/UseState'
import Main from './components/main'
import Signup from './components/signup'
import Stores from './components/stores'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='flex flex-col gap-10 h-120vh w-full bg-gray-600 '>
    <UseState/>
    <Main/>
    <Signup/>
    <Stores/>
    <Footer/>
    </div>
  )
}

export default App
