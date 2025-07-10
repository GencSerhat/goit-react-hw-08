// import ContactForm from "../components/contactForm/ContactForm";
// import SearchBox from "../components/searchBox/SearchBox";
// import ContactList from "../components/contactList/ContactList";

// const ContactsPage = () => {
//   return (
//     <div>
//       <h2>My Contacts</h2>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

// export default ContactsPage;

// import { useDispatch } from "react-redux";
// import ContactForm from "../components/contactForm/ContactForm";
// import SearchBox from "../components/searchBox/SearchBox";
// import ContactList from "../components/contactList/ContactList";
// import { addContact } from "../redux/contacts/operations";

// const ContactsPage = () => {
//   const dispatch = useDispatch();

//   const handleAddContact = (name, number) => {
//     dispatch(addContact({ name, number }));
//   };

//   return (
//     <div>
//       <h2>My Contacts</h2>
//       <ContactForm onAddContact={handleAddContact} />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

// export default ContactsPage;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/contactForm/ContactForm";
import SearchBox from "../components/searchBox/SearchBox";
import ContactList from "../components/contactList/ContactList";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Sayfa yüklendiğinde kullanıcı giriş yapmışsa rehber verilerini getir
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  return (
    <div>
      <h2>My Contacts</h2>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;


