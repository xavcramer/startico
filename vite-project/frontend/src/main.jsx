import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./Header/Header.jsx"
import Explore from './Explore/Explore.jsx'
import Navcomponent from './Navcomponent/Navcomponent.jsx'
import Speedsec from './Speedsec/Speedsec.jsx'
import Build from './Build/Build.jsx'
import Efficient from './Efficient/Efficient.jsx'
import Reviews from './Reviews/Reviews.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Explore/>
    <Navcomponent/>
    <Header/>
    <Speedsec/>
    <Build/>
    <Efficient/>
    <Reviews/>
  </StrictMode>,
)
