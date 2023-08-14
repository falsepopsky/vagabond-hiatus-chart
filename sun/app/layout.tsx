import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  style: 'normal',
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vagabond Hiatus Chart',
  description: 'A simple way to visualize the actual state of Vagabond with charts.',
  keywords: 'Vagabond, Hiatus, Takehiko Inoue, Kodansha, Musashi Miyamoto, Manga, Status, Charts, Morning, バガボンド',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={ibm_plex_sans.className}>
      <body className='w-full overflow-y-auto overflow-x-hidden bg-neutral-950 text-neutral-300 selection:bg-neutral-300 selection:text-neutral-900'>
        {children}
        <footer className='mx-auto flex w-full max-w-screen-xl flex-col flex-nowrap gap-4 px-4 font-light md:flex-row md:flex-wrap xl:px-2'>
          <hr className='flex-[1_1_100%] border-zinc-900' />
          <div className='flex grow-[2] flex-col flex-nowrap font-normal'>
            <h3 className='my-4 text-xl'>General</h3>
            <p className='mb-2 text-sm text-neutral-400'>The website of Vagabond Hiatus Chart.</p>
            <p className='mb-2 text-sm text-neutral-400'>
              Some of the images belongs to Takehiko Inoue &amp; Kōdansha.
            </p>
            <p className='mb-2 text-sm text-neutral-400'>For a better experience, visit the site in desktop mode.</p>
            <div className='my-6 min-w-[200px] max-w-[200px]'>
              <svg viewBox='0 0 636.7 227.3' fill='currentColor' width={200}>
                <title>Science Department Logo</title>
                <path d='M98.4,4.6l94.4,54.5v109.1l-94.4,54.5L4,168.2V59.1L98.4,4.6 M98.4,0L0,56.8v113.7l98.4,56.8l98.4-56.8V56.8L98.4,0L98.4,0 z' />
                <path d='M98.4,48.1c36.2,0,65.6,29.4,65.6,65.6s-29.4,65.6-65.6,65.6s-65.6-29.4-65.6-65.6S62.3,48.1,98.4,48.1 M98.4,44.1 c-38.4,0-69.6,31.2-69.6,69.6s31.2,69.6,69.6,69.6s69.6-31.2,69.6-69.6C168,75.2,136.9,44.1,98.4,44.1L98.4,44.1z' />
                <path d='M262.9,102.8c-2.9,0-5.6-0.5-8-1.6s-4.4-2.6-5.8-4.7c-1.5-2.1-2.2-4.6-2.2-7.5h4c0,2.3,0.6,4.1,1.7,5.6 c1.1,1.5,2.6,2.6,4.4,3.3c1.8,0.7,3.8,1.1,5.9,1.1c2.4,0,4.5-0.4,6.2-1.2c1.7-0.8,3.1-1.9,4-3.2c0.9-1.3,1.4-2.7,1.4-4.1 c0-2.1-0.6-3.8-1.9-5.2s-3.1-2.4-5.6-3.1l-7.4-2.4c-3.8-1.3-6.7-2.8-8.6-4.5c-1.9-1.7-2.9-4-2.9-7c0-3.4,1.3-6.1,3.8-8.2 c2.5-2.1,6.2-3.2,11-3.2c4.3,0,7.7,1,10.1,3c2.5,2,3.9,4.5,4.3,7.7h-4.1c-0.4-2.2-1.4-3.9-3.2-5.1s-4.1-1.8-7.1-1.8 c-3.3,0-5.8,0.7-7.6,2.2c-1.8,1.5-2.7,3.4-2.7,5.6c0,1.8,0.6,3.3,1.7,4.4c1.1,1.1,2.9,2,5.3,2.8l8.9,2.9c3.1,1,5.6,2.4,7.5,4.3 s2.9,4.4,2.9,7.5c0,2.2-0.6,4.2-1.8,6.1c-1.2,1.9-3,3.4-5.4,4.6C269.4,102.2,266.4,102.8,262.9,102.8z' />
                <path d='M304,102.8c-3.9,0-7.3-1-10.1-3c-2.8-2-5-4.8-6.5-8.3s-2.2-7.5-2.2-12c0-4.9,0.8-9,2.5-12.4c1.7-3.3,3.9-5.9,6.8-7.6 s6-2.6,9.5-2.6c4.5,0,8.2,1.2,11.1,3.5s4.9,5.3,6.1,9l-4.5,1c-1-3-2.6-5.4-4.9-7.1c-2.3-1.7-4.9-2.6-7.8-2.6c-2.5,0-4.9,0.7-7,2.1 c-2.2,1.4-3.9,3.5-5.3,6.4s-2,6.3-2,10.4c0,3.7,0.5,7,1.5,10s2.6,5.3,4.7,7.1c2.1,1.7,4.8,2.6,8.1,2.6c3.8,0,6.9-1,9.2-3.1 c2.3-2.1,3.5-4.8,3.5-8.2h4.6c0,3.1-0.7,5.8-2.2,8.1c-1.5,2.3-3.5,4-6.2,5.2C310.3,102.2,307.3,102.8,304,102.8z' />
                <path d='M329.6,102V57.5h4.2V102H329.6z' />
                <path d='M346.1,102V57.5h26.8v3.6h-22.6v16.6h21.3v3.6h-21.3v17.1h22.6v3.6C372.9,102,346.1,102,346.1,102z' />
                <path d='M383,57.5h5.4l23.8,39.2h-0.4V57.5h4.2V102h-5.1l-24.3-40h0.6v40H383V57.5z' />
                <path d='M443.4,102.8c-3.9,0-7.3-1-10.1-3c-2.8-2-5-4.8-6.5-8.3s-2.2-7.5-2.2-12c0-4.9,0.8-9,2.5-12.4c1.7-3.3,3.9-5.9,6.8-7.6 s6-2.6,9.5-2.6c4.5,0,8.2,1.2,11.1,3.5s4.9,5.3,6.1,9l-4.5,1c-1-3-2.6-5.4-4.9-7.1c-2.3-1.7-4.9-2.6-7.8-2.6c-2.5,0-4.9,0.7-7,2.1 c-2.2,1.4-3.9,3.5-5.3,6.4s-2,6.3-2,10.4c0,3.7,0.5,7,1.5,10s2.6,5.3,4.7,7.1c2.1,1.7,4.8,2.6,8.1,2.6c3.8,0,6.9-1,9.2-3.1 c2.3-2.1,3.5-4.8,3.5-8.2h4.6c0,3.1-0.7,5.8-2.2,8.1c-1.5,2.3-3.5,4-6.2,5.2C449.8,102.2,446.8,102.8,443.4,102.8z' />
                <path d='M469,102V57.5h26.8v3.6h-22.6v16.6h21.3v3.6h-21.3v17.1h22.6v3.6C495.8,102,469,102,469,102z' />
                <path d='M246.9,126.1h12.3c4.5,0,8.3,0.9,11.6,2.8c3.3,1.8,5.8,4.4,7.5,7.7c1.8,3.3,2.7,7.2,2.7,11.7c0,4.4-0.9,8.3-2.7,11.7 c-1.8,3.3-4.3,5.9-7.5,7.8c-3.3,1.9-7.1,2.8-11.6,2.8h-12.3L246.9, 126.1L246.9,126.1z M251.1,129.7V167h8.1c3.6,0,6.7-0.8,9.3-2.4 c2.6-1.6,4.6-3.9,6-6.7s2.1-6,2.1-9.6s-0.7-6.8-2.1-9.6s-3.4-5-6-6.6s-5.7-2.4-9.3-2.4H251.1z' />
                <path d='M310.5,149.9h-15.6V167h22.6v3.6h-26.8v-44.5h26.8v3.6h-22.6v16.6h21.3v3.6H310.5' />
                <path d='M327.5,170.6v-44.5h13.6c4.8,0,8.5,1.2,10.9,3.7c2.5,2.5,3.7,5.7,3.7,9.8c0,4-1.2,7.2-3.7,9.7c-2.5,2.4-6.1,3.7-10.9,3.7 h-9.3v17.6H327.5z M331.7,149.3h9.3c3.4,0,6-0.9,7.7-2.6c1.8-1.7,2.6-4.1,2.6-7.1c0-3.1-0.9-5.5-2.6-7.3c-1.8-1.8-4.3-2.7-7.7-2.7 h-9.3V149.3z' />
                <path d='M397.8,170.6v-44.5h15c4.9,0,8.7,1.2,11.1,3.6c2.5,2.4,3.7,5.5,3.7,9.3s-1.2,6.9-3.7,9.3c-2.5,2.4-6.2,3.6-11.1,3.6H402 v18.6L397.8,170.6L397.8,170.6z M402,148.8h10.6c3.5,0,6.2-0.9,8-2.7s2.8-4.1,2.8-7s-0.9-5.2-2.7-6.9c-1.8-1.7-4.4-2.6-7.9-2.6H402 V148.8z M423.2,170.6L410,150.8h4.6l14,19.8H423.2z' />
                <path d='M445.8,129.7v-1l0.9,1h-15.8v0v-3.6H465v3.6h-15.9l0.9-1v41.9h-4.2V129.7' />
                <path d='M470.2,126.1h6l16.7,32.6h-0.5l16.7-32.6h5.9v44.5h-4.2V130h0.9l-17.6,34.6h-2.8l-17.5-34.4h0.6v40.4h-4.2L470.2,126.1 L470.2,126.1z' />
                <path d='M527.4,170.6v-44.5h26.8v3.6h-22.6v16.6h21.3v3.6h-21.3V167h22.6v3.6H527.4z' />
                <path d='M564.3,126.1h5.4l23.8,39.2h-0.4v-39.2h4.2v44.5h-5.1l-24.3-40h0.6v40h-4.2V126.1z' />
                <path d='M602.6,129.7v-3.6h34.1v3.6h-15.9l0.9-1v41.9h-4.2v-41.9l0.9,1L602.6,129.7L602.6,129.7z' />
                <polygon points='375.8,126.1 370.9,126.1 355.5,170.6 359.9,170.6 364.2,158.3 365.2,154.9 367.6,147.7 373.2,131.4 381.3,154.9 382.5,158.3 386.6,170.6 391,170.6 ' />
              </svg>
            </div>
          </div>
          <div className='flex grow flex-col flex-nowrap'>
            <h3 className='my-4 text-xl font-normal'>Navigation</h3>
            <Link className='mb-2 w-max text-sm text-teal-400 hover:opacity-90' href='/'>
              Home
            </Link>
            <Link className='mb-2 w-max text-sm text-teal-400 hover:opacity-90' href='/about'>
              About
            </Link>
          </div>
          <div className='flex grow flex-col flex-nowrap'>
            <h3 className='my-4 text-xl font-normal'>External Links</h3>
            <a
              className='mb-2 w-max text-sm text-teal-400 hover:opacity-90'
              href='https://itplanning.co.jp/'
              rel='noopener noreferrer'
              target='_blank'>
              Takehiko Inoue
            </a>
            <a
              className='mb-2 w-max text-sm text-teal-400 hover:opacity-90'
              href='https://morning.kodansha.co.jp/'
              rel='noopener noreferrer'
              target='_blank'>
              Morning Kodansha
            </a>
            <a
              className='mb-2 w-max text-sm text-teal-400 hover:opacity-90'
              href='https://www.reddit.com/r/vagabondmanga/'
              rel='noopener noreferrer'
              target='_blank'>
              Reddit Vagabond
            </a>
          </div>
          <p className='mb-4 w-full text-center text-base leading-loose text-stone-400'>
            Vagabond Hiatus Chart © 2021 - Present.
          </p>
        </footer>
      </body>
    </html>
  );
}
