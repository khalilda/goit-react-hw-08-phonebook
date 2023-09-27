import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/filter/slice.filter';
import { getFilter } from 'redux/selectors';
import style from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilterAction(event.target.value));
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
