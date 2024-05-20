import {
  STORAGE,
  TOKEN_KEY,
  TOKEN_PREFIX,
  ADMIN_KEY,
  ADMIN_PREFIX,
} from "../config/settings";
import { useContext } from "react";
import { ContextApplication } from "../config/contexts.js";

const useJWT = () => {
  const application = useContext(ContextApplication);

  const get = () => {
    return `${STORAGE.getItem(TOKEN_KEY)}`;
  };

  const set = (token) => {
    STORAGE.setItem(TOKEN_KEY, `${TOKEN_PREFIX} ${token}`);
  };

  const setAdmin = (admin) => {
    STORAGE.setItem(ADMIN_KEY, `${ADMIN_PREFIX} ${admin}`);
  };

  const getAdmin = () => {
    return `${STORAGE.getItem(ADMIN_KEY)}`;
  };

  const signOut = () => {
    STORAGE.setItem(TOKEN_KEY, "");
    application.setIsAuthenticated(false);
  };

  return { get, set, signOut, setAdmin, getAdmin };
};

export default useJWT;
