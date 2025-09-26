import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './components/Pizza'
// import Home from './components/Home'
// import Cart from './components/Cart'
// import Register from './components/Register'
// import LoginPage from './components/LoginPage'

function App() {

  return (
    <div className="contenedor">
      <Navbar />
      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<LoginPage />*/}
      {/*<Cart/>*/}
      <Pizza/>
      <Footer />
    </div>
  )
}

export default App
