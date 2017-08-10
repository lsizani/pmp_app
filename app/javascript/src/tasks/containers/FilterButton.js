import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import FilterTaskButton from '../components/FilterTasksButton';

const mapStateToProps = (state, ownProps) => ({
  active: false //state.tasksReducer,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));

  }
});

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(FilterTaskButton);
export default FilterButton;