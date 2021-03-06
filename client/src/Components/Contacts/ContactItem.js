import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../Context/contact/ContactContext';

const ContactItem = ({ contact }) => {
  const context = useContext(ContactContext);

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    context.deleteContact(_id);
    context.clearCurrent();
  };

  const onEdit = () => {
    context.setCurrent(contact);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={onEdit}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.protoTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
