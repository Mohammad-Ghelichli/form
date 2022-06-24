import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
    {/* <Login/> */}
    <Routes>
    <Route path='/SignUp' element={<SignUp />}/>
    <Route path="/" element={<Login />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
