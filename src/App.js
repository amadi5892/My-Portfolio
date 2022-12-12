import { Routes, Route } from 'react-router-dom'

import Nav from './routes/Nav/nav.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />} >
        Hello World
      </Route>
    </Routes>
  )
}

export default App;
