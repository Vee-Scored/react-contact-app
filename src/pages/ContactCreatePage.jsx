import React from 'react'
import ContactCreateForm from '../components/ContactCreateForm'
import { useLoading } from '../store/UseLoadingStore'
import LoadingComponent from '../components/LoadingComponent'

const ContactCreatePage = () => {
  const {isLoading} = useLoading()
  return (
    <div>
      {isLoading && <LoadingComponent/>}
      <ContactCreateForm/>
      
    </div>
  )
}

export default ContactCreatePage