import { isAuthenticated } from 'client/services/authAPI';
import * as React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';

interface IProps extends RouteProps {
  component: React.ComponentType<any>;
  children?: never;
  render?: never;
}

class PrivateRoute extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.renderOrRedirect = this.renderOrRedirect.bind(this);
  }

  public render() {
    const { component, children, render, ...rest } = this.props;

    return <Route {...rest} render={this.renderOrRedirect} />;
  }

  private renderOrRedirect(props: RouteComponentProps<any>): JSX.Element {
    return isAuthenticated() ? (
      <this.props.component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );
  }
}

export default PrivateRoute;
