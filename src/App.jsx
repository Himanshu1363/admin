import { useState } from 'react'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import  Sidebar  from './components/Sidebar'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <div className='flex '>
   <div><Sidebar/></div>
       <div className='w-full p-6'> 
   <AdminDashboard></AdminDashboard>
   </div>
       </div>
      
     
    </>
  )
}

export default App
