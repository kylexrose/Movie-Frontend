import jwtDecode from "jwt-decode";

const checkIfUserIsAuth = () => {
  //check if token exists, if it doesnt exists return false
  //if it does exists, check if token valid (meaning not expired)
  //if expired return false
  //else return true

  let getJwtToken = window.localStorage.getItem("jwtToken");//check if the token is valid

  if (getJwtToken) {
    const currentTime = Date.now() / 1000;
    let decodedToken = jwtDecode(getJwtToken);

    if (decodedToken.exp < currentTime) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export default checkIfUserIsAuth;
