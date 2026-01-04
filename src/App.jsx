import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import View from './pages/View'
import Edit from './pages/Edit'
import Error from './pages/Error'
//import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return<>
  <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:expenseId' element={<Edit />} />
        {/*not found page*/}
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter>
  </>

}

export default App
