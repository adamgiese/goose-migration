/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
/* eslint-ensable no-unused-vars */

export default function TripItem(props) {
  const {
    title,
    link,
    description,
    activities,
  } = props;

  const elements = {
    title: <CardHeader
      title={title}
      subtitle={ description || null }
    />,


    link: link ? <p className='item--cta'>
      <a href={link} target='_blank'>View Site</a>
    </p> : null,

    activities: activities ? <ul>
      { activities.map(item =>
        <li>
          { item.link ?
            <a href={item.link} target='_blank'>
              {item.title}
            </a> : item.title }
        </li>
      ) }
    </ul> : null,

  };

  return (
    <Card className='trip-item'>
      {elements.title}
      <CardText>
        {elements.activities}
        {elements.link}
      </CardText>
    </Card>
  );
}
