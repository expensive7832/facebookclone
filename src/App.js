import React, {lazy, Suspense} from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Landing = lazy(() => import("./Pages/Landing"))
const Home = lazy(() => import("./Pages/Home"))

function App() {

  const login = false

  return (
  <Suspense fallback={<FaFacebook size={32}
  className="text-primary position-absolute top-50 start-50 translate-middle"/>}>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={login ? <Home/> : <Landing/>}/>
   </Routes>
   </BrowserRouter>
  </Suspense>
  )
}

export default App