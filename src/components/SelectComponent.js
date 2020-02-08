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

  const selectOption = (e) => {
    // change selected option colour
    e.target.classList.add('selected')
    // TODO: if already selected then unselect
    // add selected option
    setSelection(selection.concat(e.target.innerText ))
    // update component style
    document.querySelector('.select-btn').classList.add('selected')

    updateComponentStyles()

  }

  const updateComponentStyles = () => {
    const displayedOptionText = document.querySelector('.displayed-option')
    

    displayedOptionText.classList.remove('default-text', 'uppercase')
    displayedOptionText.classList.add('small-text', 'capitalise')
   
    
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