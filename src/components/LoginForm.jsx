import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../https/AxiosInstance";
import { useLoading } from "../store/UseLoadingStore";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { Field, Formik } from "formik";

const LoginForm = () => {
  const { isLoading, setLoading, setLoaded } = useLoading();
  const nav = useNavigate();

  const userLogin = async (loginInfo) => {
    setLoading();
    try {
      console.log("Loading state before request:", isLoading);

      const res = await api.post("/login", loginInfo);

      console.log("Response:", res.data);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        nav("/indexPage");
      } else {
        Swal.fire({
          title: "Login Fail",
          text: "Email or Password is incorrect",
          icon: "error",
        });
      }
    } catch (err) {
      if (err.response) {
        console.error("Error response:", err.response);
      } else if (err.request) {
        console.error("Error request:", err.request);
      } else {
        console.error("Error message:", err.message);
      }
    } finally {
      setLoaded();
      console.log("Loading state after request:", isLoading);
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "At least 8 letters!")
      .max(16, "Password is too long!")
      .required("Password is required!"),
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 rounded min-w-72  max-w-md mx-auto py-5 px-4 ">
        <h3 className="text-lg mb-2 font-semibold">Login Form</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={userLogin}  // Use Formik's onSubmit
        >
          {({ errors, touched, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="sm:w-72">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                {errors.email && touched.email ? (
                  <div className="text-red-600 text-xs">{errors.email}</div>
                ) : null}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                {errors.password && touched.password ? (
                  <div className="text-red-600 text-xs">{errors.password}</div>
                ) : null}
              </div>

              <div className="flex-col flex md:flex-row justify-between md:items-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
                <Link to={"/signUp"}>
                  <p className="text-[10px] underline dark:text-white font-semibold py-2 md:p-0">
                    If you don't have an Acc, Sign up here!
                  </p>
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
