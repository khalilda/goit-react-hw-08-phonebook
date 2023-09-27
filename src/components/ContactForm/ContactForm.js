import { getContacts } from '../../redux/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import style from './ContactForm.module.css';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (name, number) => {
    return contacts?.find(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : dispatch(
          addContacts({
            name,
            number,
          })
        );
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: {
        return;
      }
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    toast.success(`${name} added to contacts.`);
    onDelete();
  };

  const onDelete = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label title="Name" htmlFor="name"></label>
      <input
        className={style.input}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor="number"></label>
      <input
        className={style.input}
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
        required
      />
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
