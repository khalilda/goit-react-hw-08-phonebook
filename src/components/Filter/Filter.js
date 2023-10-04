import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/filter/sliceFilter';

import style from './Filter.module.css';
import { selectFilteredContact } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilteredContact);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilterAction(event.currentTarget.value));
  };

  return (
    <label>
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contacts by name"
        onChange={handleFilter}
      />
    </label>
  );
};
