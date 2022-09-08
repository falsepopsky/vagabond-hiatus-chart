export const HeatSVG: React.FunctionComponent<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' aria-hidden='true'>
    <defs>
      <linearGradient id='deepBlue' gradientTransform='rotate(45 0.5 0.5)'>
        <stop offset='0%' stopColor='#6a11cb' />
        <stop offset='100%' stopColor='#2575fc' />
      </linearGradient>
    </defs>
    <g fill='url(#deepBlue)'>
      <rect x='20' y='18' width='2' height='2' />
      <rect x='28' y='16' width='2' height='2' />
      <rect x='14' y='6' width='2' height='2' />
      <path d='M16,22H12V16a2.0023,2.0023,0,0,0-2-2H4a2.0023,2.0023,0,0,0-2,2v6a2.0023,2.0023,0,0,0,2,2h6v4a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V24A2.0023,2.0023,0,0,0,16,22ZM4,22V16h6v6Zm8,6V24h4v4Z' />
      <path d='M28,30H24a2.0021,2.0021,0,0,1-2-2V24a2.0021,2.0021,0,0,1,2-2h4a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,28,30Zm-4-6v4h4V24Z' />
      <path d='M28,2H22a2.0023,2.0023,0,0,0-2,2v6H18a2.0023,2.0023,0,0,0-2,2v2a2.0023,2.0023,0,0,0,2,2h2a2.0023,2.0023,0,0,0,2-2V12h6a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2ZM18,14V12h2v2Zm4-4V4h6v6Z' />
      <path d='M8,10H4A2.0021,2.0021,0,0,1,2,8V4A2.0021,2.0021,0,0,1,4,2H8a2.0021,2.0021,0,0,1,2,2V8A2.0021,2.0021,0,0,1,8,10ZM4,4V8H8V4Z' />
    </g>
  </svg>
);

export const DBSVG: React.FunctionComponent<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='28' height='28' fill='#d9d9d9'>
    <circle cx='22' cy='24' r='2' />
    <path d='M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z' />
    <circle cx='8' cy='8' r='1' />
    <circle cx='8' cy='16' r='1' />
    <circle cx='8' cy='24' r='1' />
    <path d='M5,21h7V19H5V13H21v3h2V5a2,2,0,0,0-2-2H5A2,2,0,0,0,3,5V27a2,2,0,0,0,2,2h7V27H5ZM5,5H21v6H5Z' />
  </svg>
);

export const ShareSVG: React.FunctionComponent<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='24' height='24' fill='#d9d9d9'>
    <path d='M5,25V15.8281l-3.5859,3.586L0,18l6-6,6,6-1.4141,1.4141L7,15.8281V25H19v2H7A2.0024,2.0024,0,0,1,5,25Z' />
    <path d='M24,22h4a2.002,2.002,0,0,1,2,2v4a2.002,2.002,0,0,1-2,2H24a2.002,2.002,0,0,1-2-2V24A2.002,2.002,0,0,1,24,22Zm4,6V24H23.9985L24,28Z' />
    <path d='M27,6v9.1719l3.5859-3.586L32,13l-6,6-6-6,1.4141-1.4141L25,15.1719V6H13V4H25A2.0024,2.0024,0,0,1,27,6Z' />
    <rect x='2' y='6' width='6' height='2' />
    <rect x='2' y='2' width='8' height='2' />
  </svg>
);
