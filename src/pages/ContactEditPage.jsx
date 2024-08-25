import React from 'react'
import { useParams } from 'react-router-dom'
import { useContactStore } from '../store/UseContactStore';
import ContactEditForm from '../components/ContactEditForm';
import { useLoading } from '../store/UseLoadingStore';
import LoadingComponent from '../components/LoadingComponent';

const ContactEditPage = () => {
  const {contactId} = useParams();
  const {contacts} = useContactStore();
  const currentContact = contacts.find(contact => contact.id == contactId)
  const {isLoading} = useLoading()
  
  return (
    <div>
        {isLoading && <LoadingComponent/>}
        <ContactEditForm contact={currentContact} />
    </div>
  )
}

export default ContactEditPage