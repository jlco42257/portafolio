import './App.css'
import About from './components/About'
import Haedaer from './components/Header'
import Presentation from './components/Presentation'

function App() {
  return (
    <div className='bg-slate-950 pt-1'>
      <Haedaer/>
      <Presentation/>
      <About/>
    </div>
  )
}

export default App
