import { Heatmap } from '@/comp/Heatmap';
import { ChartSVG, GreenBlob, HeatmapSVG, Information, RedBlob, Treemap, VagabondLogo, WhiteBlob } from '@/comp/Svg';
import Image from 'next/image';
import { ChaptersPerArc } from './components/Chapterpa';
import { ChaptersPerYear } from './components/Chapterpy';
import { TitleSection } from './components/Titles';

export default function Home() {
  return (
    <>
      <header className='mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-7 px-4 py-20 lg:grid-cols-2 lg:gap-0 xl:px-2'>
        <div className='order-2 flex flex-col flex-nowrap items-center justify-center gap-2 px-2 lg:order-1 lg:h-[30rem] lg:items-start'>
          <h1 className='mb-5 max-w-xl text-center text-5xl font-medium sm:text-6xl lg:text-left'>
            <span className='mb-3 block'>VAGABOND</span>
            <span className='mb-3 block'>HIATUS</span>
            <span className='mb-3 block'>CHART</span>
          </h1>
          <p className='mb-4 text-base leading-relaxed sm:text-xl'>
            A simple way to visualize the actual state of Vagabond with charts.
          </p>
        </div>
        <div className='relative order-1 h-[20rem] w-[20rem] justify-self-center lg:order-2'>
          <RedBlob />
          <WhiteBlob />
          <GreenBlob />
        </div>
      </header>
      <main className='mx-auto flex w-full max-w-screen-xl flex-col flex-nowrap gap-4 px-4 xl:px-2'>
        <TitleSection title='Information' bgTailwind='bg-emerald-900'>
          <Information />
        </TitleSection>
        <div className='mb-6 mt-4 grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col flex-nowrap gap-5 self-center'>
            <div className='mt-4 self-center'>
              <VagabondLogo />
            </div>
            <div className='mb-5 mt-4'>
              <p className='text-sm leading-relaxed sm:text-base'>
                Vagabond &#40;バガボンド&#41; is a Japanese epic martial arts manga series written and illustrated by
                Takehiko Inoue. It portrays a fictionalized account of the life of Japanese swordsman Musashi Miyamoto,
                based on Eiji Yoshikawa&apos;s novel Musashi. It has been serialized in Kodansha&apos;s seinen manga
                magazine Morning since September 1998, with its chapters collected into thirty-seven tankōbon volumes as
                of July 2014. &#40;wikipedia&#41;
              </p>
            </div>
            <div className='my-4 flex flex-col justify-evenly gap-2 text-center md:flex-row'>
              <div className='group flex-1 rounded-lg border border-emerald-200 px-2 py-3 hover:border-emerald-300'>
                <p className='mb-4 text-2xl group-hover:text-emerald-300 md:text-4xl'>327</p>
                <p className='text-sm md:text-base'>CHAPTERS RELEASED</p>
              </div>
              <div className='group flex-1 rounded-lg border border-emerald-200 px-2 py-3 hover:border-emerald-300'>
                <p className='mb-4 text-2xl group-hover:text-emerald-300 md:text-4xl'>37</p>
                <p className='text-sm md:text-base'>VOLUMES</p>
              </div>
              <div className='group flex-1 rounded-lg border border-emerald-200 px-2 py-3 hover:border-emerald-300'>
                <p className='mb-4 text-2xl group-hover:text-emerald-300 md:text-4xl'>MAY 15</p>
                <p className='text-sm md:text-base'>LAST CHAPTER</p>
              </div>
            </div>
            <div className='group flex flex-col items-center px-2 py-3'>
              <p
                className='mb-4 text-2xl before:mr-2 before:animate-pulse before:text-red-500
               before:blur-sm before:content-["●"] group-hover:text-red-500 md:text-4xl'>
                HIATUS
              </p>
              <p className='text-sm md:text-base'>CURENT STATUS</p>
            </div>
          </div>
          <div className='hidden self-center justify-self-center lg:block'>
            <Image src='/musashi.jpeg' alt='Miyamoto Musashi by Takehiko Inoue' width={360} height={514} />
          </div>
        </div>
        <TitleSection title='Hiatus Heatmap' bgTailwind='bg-violet-900'>
          <HeatmapSVG />
        </TitleSection>
        <div className='mb-6 mt-4 grid grid-cols-1 gap-6'>
          <Heatmap />
        </div>
        <TitleSection title='Chapters per year' bgTailwind='bg-yellow-300'>
          <ChartSVG />
        </TitleSection>
        <div className='mb-6 mt-4 grid grid-cols-1 gap-6'>
          <ChaptersPerYear />
        </div>
        <TitleSection title='Chapters per arc' bgTailwind='bg-red-600'>
          <Treemap />
        </TitleSection>
        <div className='mb-6 mt-4 grid grid-cols-1 gap-6'>
          <ChaptersPerArc />
        </div>
      </main>
    </>
  );
}
