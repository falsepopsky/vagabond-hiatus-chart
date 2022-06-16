import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{' '}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>

      <div
        style={{ width: '900px', height: '500px', backgroundColor: 'black' }}
      >
        hey
      </div>
    </div>
  );
};

export default About;
