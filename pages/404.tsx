import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const notFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>

      <main>
        <p>페이지를 잘못 찾았어요</p>
      </main>
    </div>
  );
};

export default notFound;
