import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './PalTemp/styles/main.scss';
import PalsList from './PalTemp/PalsList';
import ManagePartnerSkills from './PalTemp/Adm/ManagePartnerSkills';
import HeaderComponent from './PalTemp/Header';
import TacTab from './PalTemp/TechnologyTab/TacTab';

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<PalsList />} exact/>
        <Route path='/adm/partner-skills' element={<ManagePartnerSkills />} exact />
        <Route path='/technology' element={<TacTab />} exact />        
      </Routes>
    </div>
  );
}

export default App;