import { type PropsWithChildren } from 'react';

interface TitleProps extends PropsWithChildren {
  title: string;
}

export const TitleSection = ({ title, children }: TitleProps) => {
  return (
    <div className='mb-6 mt-4 flex gap-3'>
      <div className='relative rounded-md p-1'>
        {children}
        <span className='absolute left-0 top-0 h-full w-full bg-emerald-900 blur-md'></span>
      </div>
      <h2 className='text-2xl sm:text-3xl'>{title}</h2>
    </div>
  );
};
