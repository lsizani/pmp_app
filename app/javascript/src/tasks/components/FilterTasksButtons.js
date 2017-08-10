import React from 'react'
import FilterButton from '../containers/FilterButton';
import * as filters from '../constants/filters';

const FilterTasksButtons = () => (
  <div className="header-block">
    <h3 className="title">Filters</h3>
    <div className="pull-right">
      <FilterButton
        filter={filters.PENDING}
        label="Pending"
      >
        Pending
      </FilterButton>
      &nbsp;&nbsp;
      <FilterButton
        filter={filters.IN_PROGRESS}
        label="In Progress"
      >
        In Progress
      </FilterButton>
      &nbsp;&nbsp;
      <FilterButton
        filter={filters.COMPLETED}
        label="Completed"
      >
        Completed
      </FilterButton>
      &nbsp;&nbsp;
    </div>
  </div>
);

export default FilterTasksButtons;

