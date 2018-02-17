import PrivateRoute from 'client/components/PrivateRoute';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import createLazyContainer from 'react-lazy-import';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './normalize.scss';
import * as style from './style.scss';

const Loading = () => <div>loading</div>;
const Error = () => <div>error</div>;

const Home = createLazyContainer(
  () =>
    import(/* webpackChunkName: 'Home' */
    'client/scenes/Home'),
  Loading,
  Error
);
const About = createLazyContainer(
  () =>
    import(/* webpackChunkName: 'About' */
    'client/scenes/About'),
  Loading,
  Error
);
const Login = createLazyContainer(
  () =>
    import(/* webpackChunkName: 'Login' */
    'client/scenes/Login'),
  Loading,
  Error
);
const Protected = createLazyContainer(
  () =>
    import(/* webpackChunkName: 'Protected' */
    'client/scenes/Protected'),
  Loading,
  Error
);
const NotFound = createLazyContainer(
  () =>
    import(/* webpackChunkName: 'NotFound' */
    'client/scenes/NotFound'),
  Loading,
  Error
);

interface IState {
  hasError: boolean;
}

class App extends React.Component<{}, IState> {
  public state: IState = {
    hasError: false
  };

  public componentDidCatch() {
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return <div>Whoops! This app broke :(</div>;
    }

    return (
      <div className={style.appShell}>
        <Helmet titleTemplate="%s - Hipsterplate" defaultTitle="Hipsterplate" />

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
