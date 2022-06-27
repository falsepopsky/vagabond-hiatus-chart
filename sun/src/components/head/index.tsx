import Head from 'next/head';

type MetaProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta = ({
  title = 'Vagabond Hiatus Chart',
  keywords = 'Vagabond, Hiatus, Takehiko Inoue, Kodansha, Musashi Miyamoto, Manga, Status, Charts, Morning, バガボンド',
  description = 'A simple way to visualize the actual state of Vagabond with charts.',
}: MetaProps) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='robots' content='follow, index' />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
