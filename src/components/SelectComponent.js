import React, { useState } from 'react';


const SelectComponent = ({display, options}) => {
  const [selection, setSelection] = useState([])
  
  
  const SelectOptions = () => {
    const displayOptions = options.map(option => 
      <li key={option}
        onClick={(e) => selectOption(e)}
        className="default-text">
        {option}
      </li>
    )
    
    return (
      <ul className="popup hide">
        {displayOptions}
      </ul>
    )
  }

  const selectOption =  (e) => {
    const selectedOptionEl = e.target
    const selectedOption = selectedOptionEl.innerText   
    
    // if already selected then unselect
    if (selection.indexOf(selectedOption) !== -1){
      // remove from selection array  
      setSelection(selection.filter(option => option !== selectedOption))
      // remove selected style from clicked option
      selectedOptionEl.classList.remove('selected')       
       
    } else {
      // add selected option
      setSelection(selection.concat(selectedOption))
      // change selected option colour
      selectedOptionEl.classList.add('selected')
           
    }
  }

 
  const showSelectOptions = () => {
    document.querySelector('.popup').classList.toggle('hide')
  }

  return (
    <div className='select-component'>
      <button 
        className={selection.length !== 0 ? 'select-btn selected' : 'select-btn default'}
        onClick={showSelectOptions}>
        <span className="selected-options uppercase">
          {selection.join(', ')}
          
        </span>
       
        <span className={selection.length !== 0 ?
        'small-text' : 'default-text'}>
          {display}
        </span>       
      </button>
      {SelectOptions()}
    </div>
  )
}

export default SelectComponent