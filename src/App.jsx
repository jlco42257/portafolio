import './App.css'
import About from './components/About'
import Haedaer from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'

function App() {
  return (
    <div className='bg-slate-950 pt-1 text-white box-border'>
      <Haedaer/>
      <Presentation/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
