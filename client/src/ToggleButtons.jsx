import React from 'react';

var ToggleButtons = ({toggleList}) => {
  function clickHandler(event) {
    {toggleList(event.target.value)};
  }

  return (
    <div>
      <button 
        class="watched" 
        onClick={clickHandler} 
        value="1" 
      >Watched</button>
      <button 
        class="watched toWatch" 
        onClick={clickHandler} 
        value="0" 
      >To Watch</button>
    </div>
  )
}

export default ToggleButtons;