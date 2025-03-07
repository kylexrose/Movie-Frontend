import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkIfUserIsAuth from "../utils/checkIfUserIsAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {// passes in the component and standard props
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        checkIfUserIsAuth() ? (
          <Component {...routerProps} />//renders the component with the global props
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
// const PrivateRoute = (props) => {
//   console.log(props);

//   return <Route exact path={props.path} component={props.component} />;
// };

// const PrivateRoute = (props) => {
//   console.log(props);

//   return (
//     <Route
//       exact
//       path={props.path}
//       render={() => <Movie />}
//       render={() => (props.user ? props.component : <Redirect to="/login" />)}
//     />
//   );
// };
