import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './Components/pages/LandingPage'
import Scheduling from './Components/pages/NewScheduling/NewScheduling'
import MySchedulings from './Components/pages/MySchedulings'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/scheduling' element={<Scheduling/>}/>
          <Route path='/myscheduling' element={<MySchedulings/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
