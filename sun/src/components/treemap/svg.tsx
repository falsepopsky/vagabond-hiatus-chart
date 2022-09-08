export const TreeSVG: React.FunctionComponent<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' aria-hidden='true'>
    <defs>
      <linearGradient id='deepBlue' gradientTransform='rotate(45 0.5 0.5)'>
        <stop offset='0%' stopColor='#6a11cb' />
        <stop offset='100%' stopColor='#2575fc' />
      </linearGradient>
    </defs>
    <g fill='url(#deepBlue)'>
      <path d='M28,2H4A2.0023,2.0023,0,0,0,2,4V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,12H23V4h5ZM16,4h5V14H16ZM14,4V20H4V4ZM4,22H14v6H4Zm12,6V16H28V28Z' />
    </g>
  </svg>
);
