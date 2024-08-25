import React from "react";
import Container from "./Container";
import formikImg from "../assets/formik.png";
import reactImg from "../assets/react.png";
import viteImg from "../assets/vite.jpg";
import tailwindImg from "../assets/tailwind.png";
import axiosImg from "../assets/axios.png";

const Footer = () => {
  return (
    <div className="mt-auto border-t py-2 border-slate-700 dark:border-slate-300">
      <Container>
        <div className="flex gap-3 justify-center">
          <a href="https://react.com">
            <img
              className="w-9 h-9 p-2 rounded-full ring-1 ring-gray-600 dark:ring-slate-700"
              src={reactImg}
              alt=""
            />
          </a>
          <a href="https://tailwindcss.com">
            <img
              className="w-9 h-9 p-2 rounded-full ring-1 ring-gray-600 dark:ring-slate-700"
              src={tailwindImg}
              alt=""
            />
          </a>
          <a href="https://formik.org">
            <img
              className="w-9 h-9 p-2 rounded-full ring-1 ring-gray-600 dark:ring-slate-700"
              src={formikImg}
              alt=""
            />
          </a>
          <a href="https://axios-http.com">
            <img
              className="w-9 h-9 p-2 rounded-full ring-1 ring-gray-600 dark:ring-slate-700"
              src={axiosImg}
              alt=""
            />
          </a>
          <a href="https://vitejs.dev">
            <img
              className="w-9 h-9 p-2 rounded-full ring-1 ring-gray-600 dark:ring-slate-700"
              src={viteImg}
              alt=""
            />
          </a>
        </div>
        <p className="text-center font-semibold font-mono mt-3 text-md dark:text-white">
          Used api :{" "}
          <a
            className="underline"
            href="https://github.com/mmsstudent2021/contact-app"
          >
            MMS's Contact-app-api
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
