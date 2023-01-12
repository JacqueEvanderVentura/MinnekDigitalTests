import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../Logic/Login/loginActions";
import { IUserLogin } from "../../Logic/models";

import Instructions from "../Instructions/Instructions";
import "./ECommerce/ECommerce.scss";


interface PropsTask3 {
  userLogin: IUserLogin;
  setUserLogin: Function;
}

const Task3 = ({ userLogin, setUserLogin }: PropsTask3) => {
  const login = useSelector((store: any) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginFailure, setLoginFailure] = useState(false);
  function handleLogin(e: React.ChangeEvent<HTMLInputElement>) {
    const { name: key, value } = e.target;
    setUserLogin({ ...userLogin, [key]: value });
  }

  function authenticateUser(): void {
    for (let i = 0; i < login.length; i++) {
      if (
        userLogin.username === login[i].username &&
        userLogin.password === login[i].password
      ) {
        setLoginFailure(false);
        setUserLogin({ ...login[i], isLogged: true });
        dispatch({
          type: loginAction.SIGN_IN,
          payload: userLogin,
        });
        return navigate("/dashboard", { replace: true });
      } else {
        setLoginFailure(true);
      }
    }
  }

  function handleSubmitLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    authenticateUser();
  }

  return (
    <div className="container">
      {" "}
      <Instructions url="https://github.com/Minnek-Digital-Studio/recruitment-test-fullstack#user-content-task-3" />
      <form className="flex flex-col justify-center items-center bg-white w-fit rounded-lg p-[2vw] duration-300">
        <div>
          <label htmlFor="inputLoginUsername">Username</label>
          <input
            onChange={handleLogin}
            autoComplete="current-password"
            name="username"
            id="inputLoginUsername"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="inputLoginPassword">Password</label>
          <input
            onChange={handleLogin}
            autoComplete="current-password"
            name="password"
            id="inputLoginPassword"
            type="password"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <button onClick={handleSubmitLogin}>Login</button>
          <div
            className="p-1"
            title={login.map(
              (accounts: IUserLogin) => `username: ${accounts.username}, password: ${accounts.password}\n\n`
            )}
          >
            <FontAwesomeIcon icon={faQuestion} />
          </div>
        </div>
        {loginFailure && (
          <small className="text-red-500">Wrong username or password.</small>
        )}
      </form>
    </div>
  );
};
export default Task3;
