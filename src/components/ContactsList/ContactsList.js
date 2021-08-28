import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';

const ContactsList = ({ friends, onDeleteContacts }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactsList;
