import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Projets from './pages/projets'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projets' element={<Projets/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
