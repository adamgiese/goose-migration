/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

export default function TripItem(props) {
  const {
    title,
    link,
    description,
    activities,
  } = props;

  const elements = {
    title: <h3 className='item--title'>{title}</h3>,

    description: description ? <p className='item--description'>{description}</p> : null,

    link: link ? <p className='item--cta'>
      <a href={link}>View Site</a>
    </p> : null,

    activities: activities ? <ul>
      { activities.map(item =>
        <li>
          {item.title}
        </li>
      ) }
    </ul> : null,

  };

  return (
    <section className='trip-item'>
      {elements.title}
      {elements.description}
      {elements.activities}
      {elements.link}
    </section>
  );
}
