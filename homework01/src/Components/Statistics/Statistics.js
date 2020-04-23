import React from 'react';
import PropTypes from 'prop-types';
import classes from './Statistics.module.css';
import randomColor from '../Helpers/Helpers';

const Statistics = ({ title, stats }) => (
  <section className={classes.statistics}>
    {title && <h2 className={classes.title}>{title}</h2>}

    <ul className={classes.statisticsList}>
      {stats.map(stats => (
        <li
          className={classes.item}
          key={stats.id}
          style={{ backgroundColor: '#' + randomColor() }}
        >
          <span className={classes.label}>{stats.label}</span>
          <span className={classes.percentage}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
