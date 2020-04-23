import React from 'react';
import PropTypes from 'prop-types';
import classes from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  const statusClasses = isOnline ? classes.online : classes.offline;
  return (
    <li className={classes.item}>
      <span className={statusClasses}>{isOnline}</span>
      <img className={classes.avatar} src={avatar} alt={name} width="58" />
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
