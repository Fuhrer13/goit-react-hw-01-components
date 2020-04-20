import React from 'react';
import PropTypes from 'prop-types';
import classes from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  const statusClasses = [classes.status];
  if (isOnline) {
    statusClasses.push(classes.online);
  }
  return (
    <li className={classes.item}>
      <span className={statusClasses.join(' ')}></span>
      <img className={classes.avatar} src={avatar} alt={name} width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
