import tags from './tags';

const austin = [
  {
    title: 'The Domain',
    description: 'Upscale retail and dining',
    tags: [
      tags.shopping,
      tags.outdoors,
    ],
    link: 'http://www.simon.com/mall/the-domain',
    completed: true,
  },
  {
    title: 'Umlauf Sculpture Garden',
    tags: [
      tags.art,
      tags.outdoors,
    ],
    link: 'http://www.umlaufsculpture.org/',
    completed: false,
  },
  {
    title: 'The Market District',
    tags: [
      tags.shopping,
      tags.outdoors,
    ],
    link: 'https://www.mapsofaustin.com/market-district',
    completed: false,
  },
  {
    title: 'Spoil Dog Day',
    completed: false,
    tags: [
      tags.dogFriendly,
      tags.outdoors,
    ],
    activities: [
      {
        title: 'Off-Leash Areas',
        link: 'http://www.austintexas.gov/department/leash-areas',
      },
    ],
  },
];
export default austin;
