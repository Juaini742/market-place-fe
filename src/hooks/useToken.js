import {jwtDecode as jwt_decode} from "jwt-decode";

function useToken() {
  const token = sessionStorage.getItem("token");

  // eslint-disable-next-line no-unused-vars
  const isTokenValid = () => {
    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        console.log("Token has expired");
        return false;
      }

      console.log("Token is still valid");
      return true;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };

  return token;
}

export default useToken;
