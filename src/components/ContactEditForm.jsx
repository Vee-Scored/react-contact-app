import React from "react";
import toast, { Toaster } from "react-hot-toast";
import BackBtnComponent from "./BackBtnComponent";
import { api } from "../https/AxiosInstance";
import { useLoading } from "../store/UseLoadingStore";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Field, Formik, Form } from "formik";

const ContactEditForm = ({ contact }) => {
  const nav = useNavigate();
  const { setLoading, setLoaded } = useLoading();
  const successNotify = () => toast.success("Contact updated successfully!");
  const errorNotify = () => toast.error("Something went wrong!");

  const updateRequest = async (values) => {
    try {
      setLoading();
      const res = await api.put(`/contact/${contact.id}`, values);
      if (res.data.success) {
        successNotify();
        setTimeout(() => {
          nav("/indexPage");
        }, 2000);
      }
    } catch (err) {
      errorNotify();
    } finally {
      setLoaded();
    }
  };

  const editContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Name is too short!")
      .max(20, "Name is too long!")
      .required("Name field is required!"),
    phone: Yup.string()
      .length(11, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string()
      .min(10, "Provide accurate address")
      .required("Address field is required!"),
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Toaster />
      <div className="border-2 rounded min-w-72 max-w-md mx-auto py-5 px-4">
        <div className="flex justify-between">
          <h3 className="text-lg mb-2 font-semibold">Edit Contact Form</h3>
          <BackBtnComponent />
        </div>

        <Formik
          validationSchema={editContactSchema}
          initialValues={contact}
          onSubmit={(values) => updateRequest(values)}
        >
          {({ errors, touched }) => (
            <Form className="sm:w-72">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  name="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
                {errors.name && touched.name && (
                  <div className="text-red-500 text-xs">{errors.name}</div>
                )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  name="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
                {errors.phone && touched.phone && (
                  <div className="text-red-500 text-xs">{errors.phone}</div>
                )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  name="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                {errors.email && touched.email && (
                  <div className="text-red-500 text-xs">{errors.email}</div>
                )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  name="address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="address"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Address
                </label>
                {errors.address && touched.address && (
                  <div className="text-red-500 text-xs">{errors.address}</div>
                )}
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactEditForm;
