const tours = [
  {
    title: '(512) Brewing Company',
    link: 'https://512brewing.com/',
    tags: [
      'dog-friendly',
      'alcohol--brewery',
    ],
  },
  {
    title: '4th Tap Brewing',
    link: 'http://4thtap.coop/',
    description: '4th Tap is a small, worker-owned brewery located in North Austin.',
    tags: [
      'alcohol--brewery',
    ],
  },
  {
    title: 'Blue Owl Brewing',
    link: 'http://blueowlbrewing.com/',
    tags: [
      'alcohol--brewery',
    ],
  },
  {
    title: 'Crystal Creek Moonshine',
    link: 'http://www.crystalcreekmoonshine.com/',
    description:
      'Born out of the Austin Hill Country and inspired by The Roaring ’20s, Crystal Creek Moonshine brings a new twist to an American classic.',
    tags: [
      'alcohol--distillery',
    ],
  },
  {
    title: 'Deep Eddy Vodka',
    link: 'https://www.deepeddyvodka.com/',
    description: 'Born in Austin, Deep Eddy Vodka is handcrafted in our Texas distillery by a team serious about creating a great spirit.',
    tags: [
      'alcohol--distillery',
    ],
  },
  {
    title: 'Infamous Brewing Company',
    link: 'http://www.infamousbrewing.com/index.html',
    tags: [
      'alcohol--brewery',
    ],
  },
  {
    title: 'Live Oak Brewing Company',
    link: 'http://liveoakbrewing.com/',
    tags: [
      'alcohol--brewery',
    ],
  },
  {
    title: 'Fitzhugh Trifecta',
    description: 'A brewery, cidery, and distillery.',
    completed: true,
    tags: [
      'alcohol--brewery',
      'alcohol--cidery',
      'alcohol--distillery',
    ],
    activities: [
      {
        title: 'Last Stand Brewing',
      },
      {
        title: 'Revolution Spirits',
      },
      {
        title: 'Argus Cidery',
      },
    ],
  },
  {
    title: 'Oasis Texas Brewing Company',
    link: 'http://otxbc.com/',
    tags: [
      'alcohol--brewery',
    ],
  },
  {
    title: 'Texas Keeper Cider',
    link: 'http://www.texaskeeper.com/',
    tags: [
      'alcohol--cidery',
      'dog-friendly',
    ],
  },
  /* tasting room coming soon...
  {
    title: 'Kooper Family Whiskey Co.',
    link: 'https://www.kooperfamily.com/',
    tags: [
      'alcohol--distillery',
    ],
  },
  */
];

export default tours.map(item => ({ ...item, tags: [...item.tags, 'alcohol'] }));
