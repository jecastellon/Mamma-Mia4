import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './components/Cart'
// import Home from './components/Home'
// import Register from './components/Register'
// import LoginPage from './components/LoginPage'

function App() {

  return (
    <div className="contenedor">
      <Navbar />
      <Cart/>
      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<LoginPage />*/}
      <Footer />
    </div>
  )
}

export default App
