import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../https/AxiosInstance";
import { useLoading } from "../store/UseLoadingStore";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SignUpForm = () => {
  const initialForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const successNotify = () => toast.success("Registered Successfully!")
  const errorNotify = () => toast.error("Something wrong!")
  const nav = useNavigate();
  const { setLoading, setLoaded } = useLoading();

  const registerUser = async (userData) => {
    setLoading();
    try {
      await api.post("/register", userData);
     
      successNotify()
      setTimeout(() => {
        nav('/login')
      }, 1000);
    } catch (error) {
      if (error.response) {
        errorNotify()
      } else if (error.request) {
        errorNotify()
      } else {
        errorNotify();
      }
    } finally {
      setLoaded();
    }
  };

  const signUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Name is too short!")
      .max(20, "Name is too long!")
      .required("Name field is required!"),
    email: Yup.string().min(13,"Invalid email!").email("Invalid email!").required("Email is required!"),
    password: Yup.string()
      .min(8, "At least 8 letters!")
      .max(16, "Password is too long!")
      .required("Password is required!"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match!")
      .required("Confirm Password is required!"),
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Toaster/>
      <div className="border-2 rounded min-w-72 max-w-md mx-auto py-5 px-4">
        <h3 className="text-lg mb-2 font-semibold">Sign Up Form</h3>
        <Formik
          initialValues={initialForm}
          validationSchema={signUpSchema}
          onSubmit={(values) => registerUser(values)}
        >
          {({ errors, touched }) => (
            <Form className="sm:w-72">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
                {errors.name && touched.name ? <div className="text-red-600 text-xs">{errors.name}</div> : null}
              </div>
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
                {errors.email && touched.email ? <div className="text-red-600 text-xs">{errors.email}</div> : null}
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
                {errors.password && touched.password ? <div className="text-red-600 text-xs">{errors.password}</div> : null}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password_confirmation"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm Password
                </label>
                {errors.password_confirmation && touched.password_confirmation ? (
                  <div className="text-red-600 text-xs">{errors.password_confirmation}</div>
                ) : null}
              </div>

              <div className="flex-col flex md:flex-row justify-between md:items-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign Up
                </button>
                <Link to={"/login"}>
                  <p className="text-[10px] underline dark:text-white font-semibold py-2 md:p-0">
                    If you have an Acc, Sign in here!
                  </p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
