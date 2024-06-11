import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import { Navigate } from 'react-router-dom'
import Main from './components/Main/Main'
import BookMarks from './Pages/BookMarks';
import Todaypage from './Pages/Todaypage'
import DeletedEntries from './Pages/DeletedEntries'
import Journey from './components/Journey'
import Hard from './components/Hard'
import Love from './components/Love'
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
              <Route path='/buddycorner' element={!authUser? (<Navigate to="/"/>):(<Main/>)}
              ></Route>
                <Route path='/deletedentries' element={!authUser? (<Navigate to="/"/>):(<DeletedEntries/>)}
              ></Route>
              <Route path='/love' element={!authUser? (<Navigate to="/"/>):(<Love/>)}
              ></Route>
              <Route path='/journey' element={!authUser? (<Navigate to="/"/>):(<Journey/>)}
              ></Route>
              <Route path='/hard' element={!authUser? (<Navigate to="/"/>):(<Hard/>)}
              ></Route>
              <Route path='/todaypage' element={!authUser? (<Navigate to="/"/>):(<Todaypage/>)}
              ></Route>
             </Routes>
            
            
     

      </div>
    
    </>
  )
}

export default App