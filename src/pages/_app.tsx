import { AppProps } from 'next/app';

const App = ({ pageProps, Component }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
