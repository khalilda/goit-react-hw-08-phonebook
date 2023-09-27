import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = event => {
    dispatch(deleteContact(event.target.dataset.id));
  };

  return (
    <ul>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li className={style.item} key={id}>
            <button
              className={style.button}
              onClick={handleDeleteContact}
              type="button"
              data-id={id}
            >
              Delete
            </button>
            <p>{`${name}: ${number}`}</p>
          </li>
        );
      })}
    </ul>
  );
};
