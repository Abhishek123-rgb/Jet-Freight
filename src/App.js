import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
          <div className="col">
            <Main/>
          </div>
      </div>
    </div>
  )
}

export default App
