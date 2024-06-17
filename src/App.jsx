
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import './styles/navbar.css'
import StartTyping from './pages/StartTyping'
function App() {

  return (
     <>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/start' element={<StartTyping/>}/>
     </Routes>
     
    
     
    </>
  )
}

export default App
