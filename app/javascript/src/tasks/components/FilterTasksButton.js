import React from 'react';

const FilterTasksButton = ({label, onClick}) => {
  return(
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default FilterTasksButton;