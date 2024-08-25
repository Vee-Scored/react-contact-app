import React, { useEffect } from 'react';
import Container from '../components/Container';
import RecordTable from '../components/RecordTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { api } from '../https/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { useContactStore } from '../store/UseContactStore';
import { useLoading } from '../store/UseLoadingStore';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import LoadingComponent from '../components/LoadingComponent';

const IndexPage = () => {
  const exitToken = localStorage.getItem('token');
  const { addContact } = useContactStore();
  const { isLoading, setLoading, setLoaded } = useLoading();
  const nav = useNavigate();
  const notify = () => toast.error('Something went wrong.')
  const getContacts = async () => {
    setLoading();
    try {
      const res = await api.get('/contact');
     
      addContact(res.data.contacts.data);
    } catch (err) {
      if (err.request) {
        const { status } = err.request;
        if (status === 401) {
          notify();
          localStorage.removeItem('token');
          nav('/login');
        }
      } else if (err.response) {
        console.error('Error response:', err.response);
        notify();
      } else {
        console.error('Error message:', err.message);
        notify();
      }
    } finally {
      setLoaded();
    }
  };

  useEffect(() => {
    if (!exitToken) {
      nav('/signUp');
    } else {
      getContacts();
    }
  }, [exitToken, nav]); // Adding `nav` to the dependency array

  return (
    <div className='flex w-full overflow-x-auto  flex-col h-screen'>
      {isLoading && <LoadingComponent/>}
      <Header />
     
      <RecordTable isLoading={isLoading} />
      
      <Toaster/>
      <Footer />
    </div>
  );
};

export default IndexPage;
