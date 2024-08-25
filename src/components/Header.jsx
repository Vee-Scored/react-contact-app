import React from "react";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../https/AxiosInstance";
import toast from "react-hot-toast";

const Header = () => {
  const nav = useNavigate();
  const addContactHandler = () => {
    nav("/contactCreate");
  };

  const logoutRequest = async () => {
    const res = await api.post("user-logout");
    if (res.data.success) {
      toast.success("You're logged out");
      localStorage.removeItem("token");
      nav('/login')
    }
  };
  const logoutHandler = () => {
    logoutRequest();
  };
  return (
    <div className="border-b py-3 border-b-slate-600 dark:border-b-slate-300">
      <Container>
        <div className="flex justify-between items-center">
          <div className="font-serif text-lg font-semibold">
            <Link>Contacts</Link>
          </div>
          <div className="flex gap-3">
            <button
              onClick={addContactHandler}
              type="button"
              className="text-white flex gap-1 items-center text-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm w-full sm:w-auto px-3 sm:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3"
              >
                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
              </svg>
            </button>

            <button
              onClick={logoutHandler}
              type="button"
              className="text-gray-900 flex gap-1 items-center hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium text-xs rounded-lg sm:text-sm px-3 sm:px-5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Logout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
