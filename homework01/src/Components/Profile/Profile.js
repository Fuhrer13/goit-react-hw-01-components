import React from 'react';
import PropTypes from 'prop-types';
import classes from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="user avatar" className={classes.avatar} />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.stats}>
        <li className={classes.statsItem}>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{stats.followers}</span>
        </li>
        <li className={classes.statsItem}>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{stats.views}</span>
        </li>
        <li className={classes.statsItem}>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
