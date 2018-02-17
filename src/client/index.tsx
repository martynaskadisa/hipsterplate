import App from 'client/scenes/App';
import createStore from 'client/store/createStore';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as Raven from 'raven-js';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

if (__PROD__) {
  if (__IS_SENTRY_CLIENT_ENABLED__) {
    Raven.config(__SENTRY_CLIENT_DSN__).install();
  }

  OfflinePluginRuntime.install();
}

const store = createStore();

const RootComponent: React.SFC<{}> = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// Webpack hot reloading API
declare const module: Module;
type RenderFactory = (
  component: React.ComponentClass<any> | React.SFC<any>
) => void;

if (__PROD__) {
  render(<RootComponent />, document.getElementById('app'));
} else {
  const { AppContainer } = require('react-hot-loader');
  const renderFactory: RenderFactory = Component => {
    render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('app')
    );
  };

  renderFactory(RootComponent);

  if (module.hot) {
    module.hot.accept('client/scenes/App', () => renderFactory(RootComponent));
  }
}
