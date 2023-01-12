import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faClose,
  faPlus,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commerceActions } from "../../../Logic/ECommerce/commerceActions";
import { uxuiActions } from "../../../Logic/ECommerce/uxui/uxuiActions";
import { loginAction } from "../../../Logic/Login/loginActions";
import { IUserLogin, IProduct } from "../../../Logic/models";
import "./ECommerce.scss";
import AddItem from "./Modals/AddItem";
import UnauthorisedEntry from "./UnauthorisedEntry/UnauthorisedEntry";

interface PropsECommerce{
	userId: IUserLogin
}
const ECommerce = ({ userId }: PropsECommerce) => {
  const itemInitialValue = {
    id: Date.now(),
    name: undefined,
    price: undefined,
    description: undefined,
    image: undefined,
  };
  const commerce = useSelector((store: any) => store.commerce);
  const uxui = useSelector((store: any) => store.uxui);
  const { activeSlides } = uxui;
  const login = useSelector((store: any) => store.login);
  const user = login.filter((users: IUserLogin) => users.id === userId.id);

  const navigate = useNavigate();

  const [item, setItem] = useState(itemInitialValue);
  const [emptyField, setEmptyField] = useState(false);
  const dispatch = useDispatch();

  function handleShowAddItemModal() {
    dispatch({ type: uxuiActions.SHOW_MODAL });
  }

  function handleSetItem(
    e: React.ChangeEvent<HTMLInputElement>,
    elementKey = "",
    elementValue = ""
  ) {
    if (elementKey && elementValue) {
      return setItem({ ...item, [elementKey]: elementValue });
    }
    const { name: key, value } = e.target;
    setItem({ ...item, [key]: value });
  }

  function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (item.description && item.name && item.price) {
			setEmptyField(false);
      dispatch({ type: commerceActions.ADD_ITEM, payload: item });
      return dispatch({ type: uxuiActions.CLOSE_MODAL });
    }
    setEmptyField(true);
  }

  function handlePreviousImage() {
    activeSlides[0] < 1
      ? dispatch({
          type: uxuiActions.SET_ACTIVE_SLIDES,
          payload: [commerce.length - 3, commerce.length],
        })
      : dispatch({
          type: uxuiActions.SET_ACTIVE_SLIDES,
          payload: [activeSlides[0] - 1, activeSlides[1] - 1],
        });
  }

  function handleNextImage() {
    activeSlides[1] > commerce.length - 1
      ? dispatch({
          type: uxuiActions.SET_ACTIVE_SLIDES,
          payload: [0, 3],
        })
      : dispatch({
          type: uxuiActions.SET_ACTIVE_SLIDES,
          payload: [activeSlides[0] + 1, activeSlides[1] + 1],
        });
  }

  function handleSignOff() {
    dispatch({ type: loginAction.LOG_OUT, payload: { user } });
    navigate("/task3", { replace: true });
  }

  return user[0]?.isLogged ? (
    <Fragment>
      <div className="flex justify-between">
        <button
          className="bg-green-400 hover:bg-green-300 duration-300"
          onClick={handleShowAddItemModal}
        >
          Add item <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
          className="min-w-fit w-10 cursor-pointer hover:bg-slate-300  duration-300 hover:duration-500"
          onClick={handleSignOff}
        >
          <FontAwesomeIcon icon={faSignOut} />
        </button>
      </div>
      {commerce.length < 1 ? (
        <div className="flex justify-center items-center w-screen  h-[20vh] ">
          <p className="w-fit bg-white rounded-lg p-6">
            {" "}
            C'mon, add some items, don't be shy 😉
          </p>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center w-screen">
          <button
            className="p-2 min-h-fit min-w-fit"
            onClick={handlePreviousImage}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mx-10 justify-evenly justify-items-center content-evenly items-center ">
            {commerce.map((product: IProduct, i: number) => (
              <div
                key={i + product.name}
                className={`${
                  i >= activeSlides[0] && i <= activeSlides[1]
                    ? "visible flex flex-col items-center justify-center bg-white border border-black p-3"
                    : "hidden"
                }`}
              >
                <div
                  onClick={() =>
                    dispatch({
                      type: commerceActions.DELETE_ITEM,
                      payload: product.id,
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="bg-red-500 text-white rounded-full cursor-pointer w-4 p-2"
                  />
                </div>
                <img
                  className="w-[50vw] sm:w-[25vw] md:w-[40vw] max-h-64 object-contain"
                  src={product.image}
                />
                <h3>{product.name.slice(0, 20)}</h3>
                <p>USD$ {product.price}</p>
                <p>
                  <em>{product.description.slice(0, 40)}</em>
                </p>
              </div>
            ))}
          </div>
          <button className="p-2 min-h-fit min-w-fit" onClick={handleNextImage}>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>
      )}

      {uxui.showModal && (
        <AddItem
          handleAddItem={handleAddItem}
          handleSetItem={handleSetItem}
          emptyField={emptyField}
        />
      )}
    </Fragment>
  ) : (
    <UnauthorisedEntry />
  );
};

export default ECommerce;
