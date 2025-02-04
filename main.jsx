import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State from './state/State.jsx'
//import Cbc from './components/Cbc.jsx'
//import Demo from './components/Demo.jsx'
// import Parent from './props/Parent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Cbc/>}
    {/* <Demo/> */}
    {/* <Parent/> */}
    <State/>
  </StrictMode>,
)
