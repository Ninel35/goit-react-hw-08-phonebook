import Contacts from 'components/Contacts/Contacts'
import Filter from 'components/Filter/Filter'
import FormUser from 'components/FormUser/FormUser'
import React from 'react'

const ContactsPage = () => {
  return (
    <>
      <FormUser />
      <Filter />
      <Contacts/>
    </>
  )
}

export default ContactsPage