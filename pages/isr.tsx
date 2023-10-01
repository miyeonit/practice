import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
      </Head>

      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 getStaticProps가 실행되었습니다`;

  return {
    props: {
      message,
    },
  };
};

export default ISR;
