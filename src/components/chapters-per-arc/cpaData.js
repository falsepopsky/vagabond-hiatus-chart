const chaptersPerYearData = [
  {
    arc: 'Takezō',
    '1 arc': 21,
  },
  {
    arc: 'First Yoshioka',
    '2 arc': 14,
  },
  {
    arc: 'Hōzōin',
    '3 arc': 43,
  },
  {
    arc: 'Yagyū',
    '4 arc': 27,
  },
  {
    arc: 'Baiken',
    '5 arc': 22,
  },
  {
    arc: 'Kojirō',
    '6 arc': 52,
  },
  {
    arc: 'Second Yoshioka',
    '7 arc': 63,
  },
  {
    arc: `Ichijōji's aftermath`,
    '8 arc': 27,
  },
  {
    arc: 'Wandering',
    '9 arc': 32,
  },
  {
    arc: 'Farming',
    '10 arc': 21,
  },
  {
    arc: 'Hosokawa',
    '11 arc': 5,
  },
];

export default chaptersPerYearData;

export let datita = {
  root: {
    name: 'Chapters per Arc',
    color: 'hsl(172, 70%, 50%)',
    children: [
      {
        name: 'Arcs',
        color: 'hsl(128, 70%, 50%)',
        children: [
          {
            name: 'Takezō',
            color: 'hsl(234, 70%, 50%)',
            children: [
              {
                name: 'Year 1998',
                color: 'hsl(181, 70%, 50%)',
                loc: 12,
              },
              {
                name: '1999',
                color: 'hsl(37, 70%, 50%)',
                loc: 13,
              },
            ],
          },
          {
            name: 'First Yoshioka',
            color: 'hsl(234, 70%, 50%)',
            children: [
              {
                name: 'Year 1999',
                color: 'hsl(181, 70%, 50%)',
                loc: 23,
              },
              {
                name: 'Year 2000',
                color: 'hsl(37, 70%, 50%)',
                loc: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};
