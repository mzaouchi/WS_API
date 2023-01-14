import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DescUser from './Components/DescUser';
import Home from './Components/Home';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
        <Route path='/desc/:id' element={<PrivateRoute auth={auth}><DescUser/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
