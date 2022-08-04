export const ChartSVG: React.FunctionComponent<React.SVGAttributes<SVGElement>> = () => (
  <svg id='icon' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
    <defs>
      <linearGradient id='deepBlue' gradientTransform='rotate(45 0.5 0.5)'>
        <stop offset='0%' stopColor='#6a11cb' />
        <stop offset='100%' stopColor='#2575fc' />
      </linearGradient>
    </defs>
    <g fill='url(#deepBlue)'>
      <path d='M13,15c1.4854,0,2.5544,1.4966,3.6863,3.0811C17.9983,19.918,19.4854,22,22,22c5.6709,0,7.78-10.79,8-12l-1.9678-.3584C27.55,12.2827,25.3938,20,22,20c-1.4854,0-2.5544-1.4966-3.6863-3.0811C17.0017,15.082,15.5146,13,13,13c-4.186,0-7.4448,7.4043-9,11.7617V2H2V28a2.0025,2.0025,0,0,0,2,2H30V28H5.0439C6.5544,22.8574,9.9634,15,13,15Z' />
      <rect fill='none' width='32' height='32' />
    </g>
  </svg>
);
