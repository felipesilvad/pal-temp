import React from 'react';
import {Routes, Route} from 'react-router-dom'
import PalsList from './PalTemp/PalsList';
import './PalTemp/styles/main.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PalsList />} exact/>
      </Routes>
    </div>
  );
}

export default App;