import * as React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

const About: React.SFC<RouteComponentProps<{}>> = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      About
    </div>
  );
};

export default About;
