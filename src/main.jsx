import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, OutraCoisa } from './App'
import {Title} from './components/Title'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title number={1} title="Fundamentos do React" />
    <Title number={2} title="Classroom"/>
    <Title number={3} title="2023"/>
    <App />
    <OutraCoisa />
  </React.StrictMode>
)
