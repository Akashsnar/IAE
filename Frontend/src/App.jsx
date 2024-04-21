import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import { Navigate } from 'react-router-dom'
import BuddysCorner from './Pages/BuddysCorner';
import BookMarks from './Pages/BookMarks';
function App() {


  const authUser = true;
  console.log(authUser);
  
  return (
    <>
      <div className='w-full h-screen'>
             
             <Toaster/>
             
             <Routes>
              <Route path='/' element={!authUser? (<Navigate to="/"/>):(<Home/>)}
              ></Route>
              {/* <Route path='/login' element={authUser? (<Navigate to="/"/>):(<Loginpage/>)}
              ></Route>
              <Route path='/signup' element={authUser? (<Navigate to="/"/>):(<SignUppage/>)}
              ></Route> */}
              <Route path='/bookmarks' element={!authUser? (<Navigate to="/"/>):(<BookMarks/>)}
              ></Route>
              <Route path='/buddycorner' element={!authUser? (<Navigate to="/"/>):(<BuddysCorner/>)}
              ></Route>
             </Routes>
            
            
     

      </div>
    
    </>
  )
}

export default App