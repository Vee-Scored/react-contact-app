import React from "react";
import { api } from "../https/AxiosInstance";
import Swal from "sweetalert2";
import BackBtnComponent from "./BackBtnComponent";
import toast, { Toaster } from "react-hot-toast";
import { useLoading } from "../store/UseLoadingStore";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";

const ContactCreateForm = () => {
  const { isLoading, setLoading, setLoaded } = useLoading();

  const initialInfo = {
    name: "",
    phone: "",
    email: "",
    address: "",
  };

  const successNotify = () => toast.success("Contact created successfully!");
  const errorNotify = () => toast.error("Something went wrong!");

  const postRequest = async (formData) => {
    try {
      setLoading();
      const res = await api.post("/contact", formData);
      if (res.status === 200) {
        successNotify();
      }
    } catch (err) {
      if (err.request) {
        console.log(err.request);
        errorNotify();
      } else if (err.response) {
        console.log(err.response);
        errorNotify();
      } else {
        console.log(err.message);
        errorNotify();
      }
    } finally {
      setLoaded();
    }
  };

  const createContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Name is too short!")
      .max(20, "Name is too long!")
      .required("Name field is required!"),
    phone: Yup.string()
      .min(5, "Invalid phone number!").max(11,"Invalid phone number!")
      .required("Phone number is required!"),
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    address: Yup.string()
      .min(10, "Provide accurate address!")
      .required("Address field is required!"),
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Toaster />
      <div className="border-2 rounded min-w-72 max-w-md mx-auto py-5 px-4">
        <div className="flex justify-between">
          <h3 className="text-lg mb-2 font-semibold">Add Contact Form</h3>
          <BackBtnComponent />
        </div>

        <Formik
          validationSchema={createContactSchema}
          initialValues={initialInfo}
          onSubmit={(values, { resetForm }) => {
            postRequest(values);
            resetForm();
          }}
        >
          {({ errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="sm:w-72">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
                <ErrorMessage name="name" component="div" className="text-red-600 text-xs" />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
                <ErrorMessage name="phone" component="div" className="text-red-600 text-xs" />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="email"
                  name="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="address"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Address
                </label>
                <ErrorMessage name="address" component="div" className="text-red-600 text-xs" />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactCreateForm;
