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
    const res = await api.post('user-logout')
    if (res.data.success) {
      toast.success("You're logged out")
      localStorage.removeItem('token')
    }
  }
  const logoutHandler = () => {
    logoutRequest()
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
              className="text-white text-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm w-full sm:w-auto px-3 sm:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add contact
            </button>

            <button
              onClick={logoutHandler}
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-xs rounded-lg sm:text-sm px-3 sm:px-5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
