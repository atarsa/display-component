import React, { useState } from 'react';


const SelectComponent = ({display, options}) => {
  const [selection, setSelection] = useState([])

  
  const SelectOptions = () => {
    const displayOptions = options.map(option => 
      <li key={option}
        onClick={(e) => selectOption(e)}>
        {option}
      </li>
    )
    
    return (
      <ul>
        {displayOptions}
      </ul>
    )
  }

  const selectOption = (e) => {
    console.log(e.target.innerText);
    setSelection(selection.concat(e.target.innerText ))
  }
  const showSelectOptions = () => {
    // TODO: show popup with options
    // toggle hide/ show class

  }
  return (
    <div>
      <button onClick={showSelectOptions}>
        {selection}
        <span>
          {display}
        </span>       
      </button>
      {SelectOptions()}
    </div>
  )
}

export default SelectComponent