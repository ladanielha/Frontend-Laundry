import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInit, UserValidator } from "../data/UserData";
import useJWT from "../libs/hooks/useJWT";
import useHTTP from "../libs/hooks/useHTTP";
import useMessage from "../libs/hooks/useMessage";
import useChangeListener from "../libs/hooks/useChangeListener";
import { BASE_URL } from "../libs/config/settings";
import useValidator from "../libs/hooks/useValidator";
import { ContextApplication } from "../libs/config/contexts";

const Register = () => {
  const application = useContext(ContextApplication);
  const navigate = useNavigate();
  const http = useHTTP();
  const jwt = useJWT();
  const onChangeListener = useChangeListener();
  const message = useMessage();
  const [admin, setAdmin] = useState(UserInit);
  const userValidator = useValidator(UserValidator);

  const signUp = async (e) => {
    e.preventDefault();
    userValidator.reset();
    try {
      const url = `${BASE_URL}/admin`;
      const response = await http.publicHTTP.post(url, admin);
      jwt.set(response.data.token);
      application.setIsAuthenticated(true);
      navigate(`/signin`, { replace: true });
      console.log(response.data.token);
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
                  USERNAME
                </label>
                <input
                  type="username"
                  value={admin.username}
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="INPUT YOUR USERNAME"
                  required=""
                  onChange={(e) =>
                    onChangeListener.onChangeText(e, admin, setAdmin)
                  }
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={admin.email}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="INPUT YOUR EMAIL"
                  required=""
                  onChange={(e) =>
                    onChangeListener.onChangeText(e, admin, setAdmin)
                  }
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
                  value={admin.password}
                  placeholder="INPUT YOUR PASSWORD"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) =>
                    onChangeListener.onChangeText(e, admin, setAdmin)
                  }
                ></input>
              </div>
              <button
                type="submit"
                onClick={signUp}
                className="w-full text-colorPicker-krem bg-colorPicker-biruBG hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                REGISTER
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account yet?{" "}
                <a
                  href="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
