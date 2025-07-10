import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const handleDelete = (id)=>{
    dispatch(deleteContact(id)
  );
};
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
  {contact.name}:{contact.number}{" "}
  <button onClick={()=>handleDelete(contact.id)}>Delete</button>
</li>
      ))}

    </ul>
  );
};
export default ContactList;
