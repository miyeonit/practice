import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Created Next App</title>
      </Head>

      <main>
        <p>
          서버 사이드에서 화면을 그릴 때는 test1이 표시되고, 클라이언트
          사이드에서 다시 그릴 떄는 undefined가 표시된다
        </p>
        {/* <p>{process.env.TEST}</p> */}

        <br />

        <p>test2가 표시된다</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

// getStaticProps는 항상 서버 사이드에서 실행되므로, 모든 환경변수를 참조할 수 있다
export const getStaticProps: GetStaticProps = async (context) => {
  console.log(process.env.TEST);
  console.log(process.env.NEXT_PUBLIC_TEST);

  return {
    props: {},
  };
};

export default EnvSample;
