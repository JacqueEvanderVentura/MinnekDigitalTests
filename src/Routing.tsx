import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ECommerce from "./Components/Task3/ECommerce/ECommerce";
import { IRouting, IUserLogin } from "./Logic/models";
import { TasksRouting } from "./TasksRouting";
const Routing = () => {
  const initialValue:IUserLogin = {
    username: '',
    password: '',
  };
  const [userLogin, setUserLogin] = useState(initialValue);
  return (
    <Routes>
      <Route path="/" element={Navbar()}>
        {TasksRouting.map((route: IRouting) =>
          route.path !== "task3" ? (
            <Route
              key={route.path}
              path={route.path}
              element={route.element()}
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={route.element({
                userLogin: userLogin,
                setUserLogin: setUserLogin,
              })}
            />
          )
        )}
      </Route>

      <Route
        path="/dashboard"
        element={<ECommerce userId={userLogin} />}
      ></Route>
			<Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};

export default Routing;
