import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/contacts/selectors';
import { filterSet } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch=useDispatch();
  const filterState=useSelector(getFilter)

  const handleChange=(e)=>{
   const value=e.target.value
    dispatch(filterSet(value));
      
  }
  

  return (
    <label className={css.labelFilter}>
      Find contact by name
      <input type="text" value={filterState} onChange={handleChange} />
    </label>
  );
}
