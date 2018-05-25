const daytrips = [
  {
    title: 'Lockhart',
    completed: false,
    description: 'Barbecue capital of Texas.',
    tags: ['short-drive'],
    activities: [
      {
        title: 'Lockhart State Park',
        link: 'https://tpwd.texas.gov/state-parks/lockhart',
      },
      {
        title: 'Lockhart BBQ Tour',
        link: 'https://austin.eater.com/2016/6/16/11954976/lockhart-texas-barbecue-where-to-eat',
      },
    ],
  },
  {
    title: 'Bastrop',
    completed: false,
    description: 'Heart of the Lost Pines',
    tags: ['short-drive'],
    activities: [
      {
        title: 'Bastrop State Park',
        link: 'https://tpwd.texas.gov/state-parks/bastrop',
      },
      {
        title: 'Buescher State Park',
        link: 'https://tpwd.texas.gov/state-parks/buescher',
      },
      {
        title: 'Downtown Bastrop',
        link: 'https://www.visitbastrop.com/play/downtown-bastrop/',
      },
    ],
  },
];

export default daytrips.map(item => ({ ...item, tags: [...item.tags, 'daytrip'] }));
