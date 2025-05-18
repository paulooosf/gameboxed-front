import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from './router.jsx'
import { LoginProvider } from './context/LoginContext.jsx'
import './App.css'

function App() {

  return (
    <LoginProvider>
      <BrowserRouter>
        <ToastContainer theme="colored"/>
        <AppRouter/>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
