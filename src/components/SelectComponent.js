import React, { useState } from 'react';


const SelectComponent = ({display, options}) => {
  const [selection, setSelection] = useState([])

  
  const SelectOptions = () => {
    const displayOptions = options.map(option => 
      <li key={option}
        onClick={(e) => selectOption(e)}
        className="default-text uppercase"  
      >
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
      // add selected style to clicked option
      document.querySelector('.select-btn').classList.add('selected')
      
    }
        
    updateComponentStyles()

  }

  const updateComponentStyles = () => {

    const displayedOptionText = document.querySelector('.displayed-option')
    
    if (selection) {
      displayedOptionText.classList.remove('default-text', 'uppercase')
      displayedOptionText.classList.add('small-text', 'capitalise')

    } else {
      
      displayedOptionText.classList.remove('small-text', 'capitalise')
      displayedOptionText.classList.add('default-text', 'uppercase')
      
      document.querySelector('.select-btn').classList.remove('selected')
    }
    
  }

  const showSelectOptions = () => {
    document.querySelector('.popup').classList.toggle('hide')
  }

  return (
    <div>
      <button 
        className='select-btn'
        onClick={showSelectOptions}>
        <span className="default-text uppercase selected-options">
          {selection.join(', ')}
          <br/>
        </span>
       
        <span className="default-text uppercase displayed-option">
          {display}
        </span>       
      </button>
      {SelectOptions()}
    </div>
  )
}

export default SelectComponent