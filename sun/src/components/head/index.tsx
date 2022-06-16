import Head from 'next/head';

type MetaProps = {
  title?: string;
  keywords?: string;
  description?: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'Vagabond Hiatus Chart',
  keywords:
    'Vagabond, Hiatus, Takehiko Inoue, Kodansha, Musashi Miyamoto, Manga, Status, Charts, Morning, バガボンド',
  description:
    'A simple way to visualize the actual state of Vagabond with charts.',
};

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;
