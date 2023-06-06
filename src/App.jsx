import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ContextProvider } from './data/contexts/authContext'
import LandingPage from './Components/pages/LandingPage'
import Scheduling from './Components/pages/NewScheduling/NewScheduling'
import MySchedulings from './Components/pages/MySchedulings'
import AddForm from './Components/pages/AddForm/AddForm'

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/scheduling' element={<Scheduling/>}/>
          <Route path='/myscheduling' element={<MySchedulings/>}/>
          <Route path='/add' element={<AddForm/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider> 
    
  )
}

export default App
