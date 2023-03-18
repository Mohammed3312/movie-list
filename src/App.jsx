import React , {useContext} from 'react'
import './App.css'
import './lib/font-awesome/css/all.min.css'
import { Watched } from './components/watched/Watched'
import { Watchlist } from './components/Watchlist/Watchlist'
import { Header } from './components/header/Header'
import { Add } from './components/add/Add'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { Globalstateprovider } from './context/Globalstate'






export const App = () => {
  return (
    <Globalstateprovider>
    <Router>
      <Header />
    <div>
      <Routes>
        <Route path='/' element={<Watchlist/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/watched' element={<Watched/>} />
      </Routes>
    </div>
    </Router>
    </Globalstateprovider>
  )
}
