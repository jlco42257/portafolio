import './App.css'
import About from './components/About'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
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
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
