import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

// 모든 페이지에 공통된 처리를 페이지 초기화시 추가
// 글로벌 CSS 추가, 페이지 이동 시 레이아웃 유지
// 페이지 초기화 시의 처리를 추가
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
