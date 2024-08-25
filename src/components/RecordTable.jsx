import React from "react";
import Container from "./Container";
import { useContactStore } from "../store/UseContactStore";
import LoadingComponent from "./LoadingComponent";
import { api } from "../https/AxiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useLoading } from "../store/UseLoadingStore";

const RecordTable = ({ isLoading }) => {
  const { contacts, deleteContact } = useContactStore();
  const nav = useNavigate();

  const { setLoading, setLoaded } = useLoading();
  const errorNotify = () => toast.error("Something went wrong");
  const successNotify = () => toast.success("Contact deleted successfully");
  const deleteContactRequest = async (id) => {
    try {
      Swal.fire({
        title: "Sure to delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          api.delete(`/contact/${id}`);
          deleteContact(id);
          successNotify();
        }
      });
    } catch (err) {
      console.error("Error deleting contact:", err);
      errorNotify();
    } finally {
      setLoaded();
    }
  };

  return (
    <>
      <Toaster />
      {isLoading && <LoadingComponent />}
      <div className=" relative w-full overflow-x-auto ">
        <table className=" text-sm max-w-4xl mx-auto text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 text-nowrap py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 text-nowrap py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 text-center py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {contacts.length == 0 && !isLoading && (
              <tr>
                <td
                  colSpan="6"
                  className="text-xl  text-center py-5 font-semibold animate-pulse"
                >
                  Empty Contact List..
                  <p
                    onClick={() => {
                      nav("/contactCreate");
                    }}
                    className="underline text-lg text-blue-700 cursor-pointer"
                  >
                    Add contact here
                  </p>
                </td>
              </tr>
            )}
            {isLoading ? (
              <tr>
                <td
                  colSpan="6"
                  className="animate-pulse text-xl py-5 font-semibold text-center"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              contacts.map(({ id, name, phone, email, address }) => {
                return (
                  <tr
                    key={id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 serial py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {name}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {phone}
                    </td>
                    <td className="px-6 py-4">{email}</td>
                    <td className="px-6 py-4">{address}</td>
                    <td className="px-6 flex gap-2 py-4">
                      <button onClick={()=>{nav(`/contactEdit/${id}`)}}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          deleteContactRequest(id);
                        }}
                        type="button"
                        className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecordTable;
