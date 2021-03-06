import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from '@store';
import TitleBar from '@components/title-bar';
import MenuBar from '@components/menu-bar';
import Routes from '@pages/routes';
import Footer from '@components/footer';

const store = configureStore();

const RootPage = () => (
  <>
    <Provider store={store}>
      <TitleBar
        location={'Root'}
      />
      <MenuBar />
      <ConnectedRouter history={history}>
        <Routes />
        <Footer />
      </ConnectedRouter>
    </Provider>
  </>
);

export default RootPage;
