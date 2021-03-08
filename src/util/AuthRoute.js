import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/auth';

const AuthRoute = ({ component: Component, ...rest }) => {
  //Deconstruct the component above ^ as Component to be used in below hah
  const { user } = useContext(AuthContext);

  return (
    <Route
      //Basically check if user already login can't go to login/register page
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
