import React from 'react';
import SelectComponent from './components/SelectComponent'
import './styles.scss'

function App() {
  const display = 'Mechanism'
  const options = ['Abrasion', 'Blunt', 'Burn', 'Frost', 'Gun Shot', 'Laceration', 'RTC', 'Stab' ]
  
  return (
    <SelectComponent 
      display={display}
      options={options} />
  );
}

export default App;
