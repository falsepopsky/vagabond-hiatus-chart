import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const Title = ({ title }: { title: string }) => (
  <h2 className='mb-5 mt-12 w-max bg-cyan-950 text-2xl text-teal-500'>{title}</h2>
);

const PStyled = (props: { children: ReactNode }) => <p className='mb-4 leading-relaxed'>{props.children}</p>;

export const metadata: Metadata = {
  title: 'About',
  description: 'Everything about the vagabond hiatus chart project.',
};

export default function About() {
  return (
    <main className='mx-auto mb-8 w-full max-w-screen-xl px-4 xl:px-0'>
      <Title title='ABOUT' />

      <PStyled>
        In a random talk with my friends, they recommended me to read VAGABOND, which happens to be by the same
        author/mangaka as Slam Dunk &#40;an anime and manga that I really like&#41;.
      </PStyled>

      <PStyled>
        After reading it and finding out that it had been on hiatus for so long, I decided to create a website that
        would help me remember what&#39;s going on with this manga and keep track of its updates.
      </PStyled>
      <PStyled>
        I know there are many series facing the same problem of being on hiatus or even getting canceled, and people
        like me, who join the reading party late, may not know the current situation. Therefore, I&#39;m planning to
        expand this project to cover more titles. Once the project is ready or even in beta release, an announcement
        will be made on the homepage, so stay tuned and hope you guys like it!
      </PStyled>

      <Title title='SPECIAL THANKS' />

      <PStyled>
        <span className='text-green-400'>Kawasaki#3316</span> for providing almost the entire{' '}
        <a
          className='text-teal-500 hover:opacity-90'
          href='https://docs.google.com/spreadsheets/d/1fw7G9I2zPtAfSh0NUl-4m7G5wsXe5PIcMFRtd03jVz0/'
          rel='noopener noreferrer'
          target='_blank'>
          dataset
        </a>{' '}
        without their contribution, this project would be very inaccurate
      </PStyled>
      <PStyled>
        <span className='text-green-400'>rentzhx3</span> for inspiring this project with their work based on{' '}
        <a
          className='text-teal-500 hover:opacity-90'
          href='https://hiatus-hiatus.github.io/'
          rel='noopener noreferrer'
          target='_blank'>
          Hunter X Hunter
        </a>
        .
      </PStyled>

      <Title title='CONTACT' />

      <PStyled>
        For business inquires only at <span className='text-green-400'>falsepopsky@protonmail.com</span>.
      </PStyled>
      <PStyled>
        Everything related to sugestions, feedback, or any other question, please complete this{' '}
        <a
          className='text-teal-500 hover:opacity-90'
          href='https://forms.gle/QjtffknkRddEy4TaA'
          rel='noopener noreferrer'
          target='_blank'>
          form
        </a>
        .
      </PStyled>
    </main>
  );
}
