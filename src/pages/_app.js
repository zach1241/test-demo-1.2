import NextApp from 'next/app';

import { SiteContext, useSiteContext } from 'hooks/use-site';
import { SearchProvider } from 'hooks/use-search';

import 'styles/globals.scss';
import 'styles/wordpress.scss';

function App({ Component, pageProps = {} }) {
  const site = useSiteContext({
  	menus: [],
  });

  return (
    <SiteContext.Provider value={site}>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </SiteContext.Provider>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default App;
