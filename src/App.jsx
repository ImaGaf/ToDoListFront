import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import List from './component/list'
import NewActivity from './component/newActivity'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
     <h1>To Do List</h1>
     <List />
    </div>
  )
}

export default App
