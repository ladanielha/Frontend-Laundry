import logo from "../assets/logowhite.png";
// import logojson from "../assets/logo.json"
import { useContext, useMemo, useState } from "react";

import { UserInit, UserValidator } from "../data/UserData";
import { ContextApplication } from "../libs/config/contexts";
import useJWT from "../libs/hooks/useJWT";
import useHTTP from "../libs/hooks/useHTTP";
import useMessage from "../libs/hooks/useMessage";
import useChangeListener from "../libs/hooks/useChangeListener";
import useValidator from "../libs/hooks/useValidator";
import { BASE_URL } from "../libs/config/settings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const application = useContext(ContextApplication);
  const jwt = useJWT();
  const http = useHTTP();
  const message = useMessage();
  const changeListener = useChangeListener();
  const navigate = useNavigate();
  const isShow = false;

  const [user, setUser] = useState(UserInit);
  const userValidator = useValidator(UserValidator);

  const signIn = async (e) => {
    e.preventDefault();
    userValidator.reset();
    try {
      const url = `${BASE_URL}/admin/signin`;
      const response = await http.publicHTTP.post(url, user);
      jwt.set(response.data.token);
      jwt.setAdmin(JSON.stringify(response.data.payload));
      application.setIsAuthenticated(true);
      navigate(`/transaction`, { replace: true });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Succes Login",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      message.error(error);
      userValidator.except(error);
    }
  };

  return (
    <section className="h-full bg-[#F7EEDD] dark:bg-white-900">
      <div className=" bg-[#F7EEDD] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
        <div className="w-full rounded-lg bg-colorPicker-krem md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              WELCOME TO KUCEKAN JUARA
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={(e) =>
                    changeListener.onChangeText(e, user, setUser)
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="INPUT YOUR EMAIL"
                  required=""
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white">
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={(e) =>
                    changeListener.onChangeText(e, user, setUser)
                  }
                  placeholder="INPUT YOUR PASSWORD"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <button
                type="submit"
                onClick={signIn}
                className="w-full text-colorPicker-krem bg-colorPicker-biruBG hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                LOGIN
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
