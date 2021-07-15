import React from 'react'
import data from './data'
import Question from './comps/Question'
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <h1>question and answwer for our service</h1>
      </div>
      <div className="question-container">
        {
          data.map((item) => <Question key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}

export default App
