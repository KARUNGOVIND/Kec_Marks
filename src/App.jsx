import React, { useEffect, useState } from 'react';
import './App.css';
import Staff from './components/Staff'

function App() {
    return (
        <>
        <div className='app'>
        <nav>
          <img src='https://media.licdn.com/dms/image/C4E0BAQGFNi0LBu6UBQ/company-logo_200_200/0/1631355989858?e=2147483647&v=beta&t=fa4LXUejVv3IFXioPpoDQ1SQ_DWQ4PfkHG4676A2uVY' style={{height:"50px",alignContent:"center",marginLeft:"20px"}}></img>
          <h1 style={{marginLeft:"5px",textAlign:"center"}}>KEC</h1>
          <div style={{marginLeft:"80%"}}>
          <button >Staff</button>
          </div>
        </nav>
        </div>
            <Staff/>
        </>
    );
}

export default App
