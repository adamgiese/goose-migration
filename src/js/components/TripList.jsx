/* eslint-disable no-unused-vars */
import React from 'react';
import TripItem from './TripItem.jsx';
/* eslint-ensable no-unused-vars */

export default function TripList(props) {
  const { items, showCompleted } = props;
  const tripItems = items.map(item => (showCompleted || !item.completed ? <TripItem
    title={item.title}
    description={item.description}
    activities={item.activities}
    link={item.link}
  /> : null));


  return (
    <div className='trip-items'>{tripItems}</div>
  );
}
