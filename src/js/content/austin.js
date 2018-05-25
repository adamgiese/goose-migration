import museums from './austin/museums';
import parks from './austin/parks';
import shopping from './austin/shopping';
import alcoholTours from './austin/alcoholTours';

const austin = [
  ...museums,
  ...alcoholTours,
  ...parks,
  ...shopping,
  {
    title: 'Spoil Dog Day',
    completed: false,
    tags: [
      'dog-friendly',
      'outdoors',
    ],
    activities: [
      {
        title: 'Off-Leash Areas',
        link: 'http://www.austintexas.gov/department/leash-areas',
      },
    ],
  },
];

export default austin.map(item => ({ ...item, tags: [...item.tags, 'local'] }));
