import { useState } from 'react'
import NAVBAR from './components/NAVBAR'
import About from './components/About'
//  import NewsCard from './components/Newscard'
import Newspage from './components/Newspage'
import Footer from './components/footer'
import './App.css'

function App() {
 const [count, setCount] = useState(0)

  return (
  <div>
    <NAVBAR />
     <About/>
     <Newspage/>
     <Footer/>
  </div>
  )   
}

export default App
