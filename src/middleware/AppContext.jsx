import {createContext, useState, useContext, useEffect} from "react";
import {getUserByTokenAction} from "../store/actions/user.action";
import {useDispatch, useSelector} from "react-redux";

const AppContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({children}) => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users = useSelector((state) => state.user.status);

  useEffect(() => {
    dispatch(getUserByTokenAction());
  }, [dispatch]);

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (users === "success") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error validating token:", error);
        setIsLoggedIn(false);
      }
    };

    validateToken();
  }, [users]);

  return (
    <AppContext.Provider value={{isLoggedIn}}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
