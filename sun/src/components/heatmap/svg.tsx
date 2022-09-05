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
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='30' height='30' fill='#d9d9d9'>
    <path d='M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V5A2,2,0,0,0,24,3Zm0,2v6H8V5ZM8,19V13H24v6Zm0,8V21H24v6Z' />
    <circle cx='11' cy='8' r='1' />
    <circle cx='11' cy='16' r='1' />
    <circle cx='11' cy='24' r='1' />
  </svg>
);
